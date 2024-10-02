const express = require('express');
const app = express();
const db = require('./database.js');
const puppeteer = require('puppeteer');
const Handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Root endpoint
app.get("/", (req, res) => {
    db.all("SELECT * FROM product", [], (err, rows) => {
        if (err) {
            res.status(400).json({"error":err.message});
            return;
        }
        res.render('index', { products: rows });
    });
});

// API endpoints for CRUD operations
app.get("/api/products", (req, res) => {
    db.all("SELECT * FROM product", [], (err, rows) => {
        if (err) {
            res.status(400).json({"error":err.message});
            return;
        }
        res.json({
            "message":"success",
            "data":rows
        });
    });
});

app.post("/api/products", (req, res) => {
    const { id, name, price, image, active } = req.body;
    db.run(`INSERT INTO product (id, name, price, image, active) VALUES (?, ?, ?, ?, ?)`,
        [id, name, price, image, active ? 1 : 0],
        function (err) {
            if (err) {
                res.status(400).json({"error": err.message});
                return;
            }
            res.json({
                "message": "success",
                "data": { id, name, price, image, active },
                "id" : this.lastID
            });
        }
    );
});

app.put("/api/products/:id", (req, res) => {
    const { name, price, image, active } = req.body;
    db.run(
        `UPDATE product SET name = ?, price = ?, image = ?, active = ? WHERE id = ?`,
        [name, price, image, active ? 1 : 0, req.params.id],
        function (err) {
            if (err) {
                res.status(400).json({"error": err.message});
                return;
            }
            res.json({
                message: "success",
                data: { id: req.params.id, name, price, image, active },
                changes: this.changes
            });
        }
    );
});

app.delete("/api/products/:id", (req, res) => {
    db.run(
        'DELETE FROM product WHERE id = ?',
        req.params.id,
        function (err) {
            if (err) {
                res.status(400).json({"error": err.message});
                return;
            }
            res.json({"message":"deleted", changes: this.changes});
        }
    );
});

// Toggle product active status
app.post("/api/products/:id/toggle", (req, res) => {
    db.run(
        'UPDATE product SET active = CASE WHEN active = 1 THEN 0 ELSE 1 END WHERE id = ?',
        req.params.id,
        function (err) {
            if (err) {
                res.status(400).json({"error": err.message});
                return;
            }
            res.json({"message":"toggled", changes: this.changes});
        }
    );
});

// Catalog generation route
app.get('/generate-catalog', (req, res) => {
    console.log('Generando catálogo HTML...');
    db.all("SELECT * FROM product WHERE active = 1", [], (err, rows) => {
        if (err) {
            console.error('Error al obtener productos:', err);
            res.status(400).json({"error":err.message});
            return;
        }
        
        const templateSource = fs.readFileSync(path.join(__dirname, 'views', 'catalog-template.hbs'), 'utf8');
        const template = Handlebars.compile(templateSource);
        
        const html = template({ 
            products: rows,
            formatDate: new Date().toLocaleDateString()
        });
        
        console.log('Catálogo HTML generado');
        res.send(html);
    });
});

// PDF generation route
app.get('/generate-catalog-pdf', async (req, res) => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        
        // Generate the HTML catalog
        const catalogHtml = await new Promise((resolve, reject) => {
            db.all("SELECT * FROM product WHERE active = 1", [], (err, rows) => {
                if (err) {
                    reject(err);
                    return;
                }
                const templateSource = fs.readFileSync(path.join(__dirname, 'views', 'catalog-template.hbs'), 'utf8');
                const template = Handlebars.compile(templateSource);
                const html = template({ 
                    products: rows,
                    formatDate: new Date().toLocaleDateString()
                });
                resolve(html);
            });
        });

        await page.setContent(catalogHtml, { waitUntil: 'networkidle0' });
        const pdf = await page.pdf({ format: 'A4' });

        await browser.close();

        res.contentType('application/pdf');
        res.send(pdf);
    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).send('Error generating PDF');
    }
});

// Server port
const HTTP_PORT = 3000;

// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT));
});
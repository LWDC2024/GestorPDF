const sqlite3 = require('sqlite3').verbose();

const DBSOURCE = "db.sqlite";

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message);
        throw err;
    } else {
        console.log('Connected to the SQLite database.');
        db.run(`CREATE TABLE product (
            id TEXT PRIMARY KEY,
            name TEXT,
            price TEXT,
            image TEXT,
            category TEXT,
            sub_category TEXT,
            pagination INTEGER,
            img_menu TEXT,
            img_product TEXT,
            img_presentation TEXT,
            img_profile_front TEXT,
            img_profile_side TEXT,
            img_profile_perspective TEXT,
            size_table TEXT,
            available_materials TEXT,
            uses_and_care TEXT,
            recommendations TEXT,
            active INTEGER DEFAULT 1
            )`,
        (err) => {
            if (err) {
                // Table already created
            } else {
                // Table just created, creating some rows
                var insert = 'INSERT INTO product (id, name, price, image, category, sub_category, pagination) VALUES (?,?,?,?,?,?,?)';
                db.run(insert, ["554", "Colchón Visco Cama Nido", "79,99 €", "/placeholder.svg?height=50&width=50", "", "", 2]);
                db.run(insert, ["279", "Colchón Basic Cama Nido", "101,46 €", "/placeholder.svg?height=50&width=50", "", "", 3]);
                db.run(insert, ["562", "Topper Visco 4", "103,99 €", "/placeholder.svg?height=50&width=50", "", "", 4]);
                db.run(insert, ["263", "Colchón Visco King 1", "137,51 €", "/placeholder.svg?height=50&width=50", "", "", 5]);
                db.run(insert, ["265", "Colchón Visco Energy 2", "158,92 €", "/placeholder.svg?height=50&width=50", "", "", 6]);
                db.run(insert, ["364", "Colchón Visco Fresh 3", "183,11 €", "/placeholder.svg?height=50&width=50", "", "", 7]);
                db.run(insert, ["266", "Colchón Visco Energy 2 Plus", "191,97 €", "/placeholder.svg?height=50&width=50", "", "", 8]);
                db.run(insert, ["373", "Colchón Visco Fresh 3 Plus", "238,99 €", "/placeholder.svg?height=50&width=50", "", "", 9]);
                db.run(insert, ["270", "Colchón Viscarbono Artesano 9", "266,99 €", "/placeholder.svg?height=50&width=50", "", "", 10]);
                db.run(insert, ["648", "Colchón Visco New Plus", "317,60 €", "/placeholder.svg?height=50&width=50", "", "", 11]);
                db.run(insert, ["630", "Colchón Visco Luxe H", "344,92 €", "/placeholder.svg?height=50&width=50", "", "", 12]);
                db.run(insert, ["367", "Colchón Visco Nature Memory", "954,52 €", "/placeholder.svg?height=50&width=50", "", "", 13]);
                db.run(insert, ["372", "Colchón Viscarbono Avantgarde 6", "267,73 €", "/placeholder.svg?height=50&width=50", "", "", 14]);
                db.run(insert, ["409", "Colchón Látex Nature Confort", "415,26 €", "/placeholder.svg?height=50&width=50", "", "", 15]);
                db.run(insert, ["426", "Colchón Látex Nature Confort Plus", "515,67 €", "/placeholder.svg?height=50&width=50", "", "", 16]);
                db.run(insert, ["497", "Colchón Visco Truck", "134,47 €", "/placeholder.svg?height=50&width=50", "", "", 17]);
                db.run(insert, ["496", "Colchón Basic Truck", "127,54 €", "/placeholder.svg?height=50&width=50", "", "", 18]);
                db.run(insert, ["631", "Cabecero tapizado Julie", "38,99 €", "/placeholder.svg?height=50&width=50", "", "", 19]);
                db.run(insert, ["632", "Cabecero tapizado juvenil Julie", "41,99 €", "/placeholder.svg?height=50&width=50", "", "", 20]);
                db.run(insert, ["712", "Cabecero tapizado Julie Madera", "49,99 €", "/placeholder.svg?height=50&width=50", "", "", 21]);
                db.run(insert, ["647", "Cabecero tapizado Camile", "58,99 €", "/placeholder.svg?height=50&width=50", "", "", 22]);
                db.run(insert, ["499", "Cabecero tapizado Paros", "75,99 €", "/placeholder.svg?height=50&width=50", "", "", 23]);
                db.run(insert, ["661", "Cabecero tapizado Paros Big", "81,99 €", "/placeholder.svg?height=50&width=50", "", "", 24]);
                db.run(insert, ["666", "Cabecero tapizado Macedonia Big", "84,99 €", "/placeholder.svg?height=50&width=50", "", "", 25]);
                db.run(insert, ["287", "Cabecero tapizado Macedonia", "89,99 €", "/placeholder.svg?height=50&width=50", "", "", 26]);
                db.run(insert, ["302", "Cabecero tapizado Atenas", "89,99 €", "/placeholder.svg?height=50&width=50", "", "", 27]);
                db.run(insert, ["667", "Cabecero tapizado Siros Big", "90,99 €", "/placeholder.svg?height=50&width=50", "", "", 28]);
                db.run(insert, ["501", "Cabecero tapizado Siros", "94,99 €", "/placeholder.svg?height=50&width=50", "", "", 29]);
                db.run(insert, ["665", "Cabecero tapizado Miconos Big", "97,99 €", "/placeholder.svg?height=50&width=50", "", "", 30]);
                db.run(insert, ["668", "Cabecero tapizado Melania Big", "97,99 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["293", "Cabecero tapizado Melania", "99,99 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["307", "Cabecero tapizado Miconos", "104,99 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["662", "Cabecero tapizado Atenas Big", "107,99 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["634", "Cabecero tapizado Brigitte", "97,80 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["309", "Cabecero tapizado Corfú", "109,99 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["549", "Cabecero tapizado Florida", "309,99 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["709", "Cabecero Tapizado Paris Combi", "309,40 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["660", "Cabecero tapizado Corfú Big", "117,99 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["319", "Cabecero tapizado Tachuelas", "119,99 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["663", "Cabecero tapizado Manhattan Big", "127,99 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["664", "Cabecero tapizado Tachuelas Big", "137,99 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["547", "Cabecero tapizado Manhattan", "139,99 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["629", "Cabecero tapizado Corfú Tex", "139,99 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["300", "Cabecero tapizado Heracles", "149,99 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["305", "Cabecero tapizado Naxos", "159,99 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["455", "Cabecero tapizado Mirto", "217,00 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["711", "Cabecero Tapizado Dalice", "219,99 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["550", "Cabecero tapizado California", "254,99 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["298", "Cabecero tapizado Nicodemus", "139,99 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["493", "Cabecero de madera Rústico Vintage", "41,96 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["645", "Cabecero de madera Nórdico", "41,99 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["640", "Cabecero de madera Rústico Toscana", "51,99 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["639", "CABECERO DE MADERA RÚSTICO PROVENZA", "55,99 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["655", "CABECERO DE MADERA RÚSTICO LOMBARDÍA", "61,99 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["649", "CABECERO DE MADERA RÚSTICO CÓRCEGA", "63,99 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["650", "CABECERO DE MADERA RÚSTICO VÉNETO", "73,99 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["638", "CABECERO DE MADERA RÚSTICO CAMPAGNE", "79,99 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["654", "Mesita Vintage Arabia", "41,99 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["656", "Mesita Vintage Lombardía", "43,99 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["652", "Mesita Vintage Alepo", "46,99 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["637", "Mesita Vintage Damman", "47,99 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["636", "Mesita Vintage Riad", "48,99 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["651", "Mesita Vintage Damasco", "48,99 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["635", "Mesita Vintage Doha", "53,99 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["633", "Cama articulada Basic", "239,99 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["385", "Cama Articulada Confort", "227,00 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["278", "Cama Articulada Confort Plus", "277,00 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["456", "Cama Geriátrica Luxury", "673,05 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["570", "Faldón tapizado para cama articulada", "290,00 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["565", "Lamas Cama Articulada", "3,50 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["274", "Canapé Tapizado 3D Galaxy", "169,00 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["405", "Canapé Tapizado Evolution", "199,00 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["414", "Canapé Madera Nell Basic G.C", "199,00 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["362", "Canapé Madera Jeno Basic G.C", "200,30 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["411", "Canapé Madera Jeno 3D G.C", "209,00 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert,["415", "Canapé Madera Nell 3D G.C.", "219,00 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["402", "Canapé Tapizado Evolution Gran Cap", "229,00 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["404", "Canapé Tapizado Microfibra Maximum", "279,00 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["424", "Canapé Tapizado Microfibra Multilámin", "297,00 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["423", "Canapé Madera Multiláminas Regulad", "319,00 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["425", "Canapé Tapizado Premium Multilámina", "323,00 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["403", "Canapé Tapizado Premium", "339,00 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["407", "Canapé Tapizado Premium Gran Capa", "369,00 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["418", "Canapé Madera Tapa Tejido 3D", "380,00 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["701", "Canapé Lateral Madera Tapa Tejido 3D", "380,00 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["502", "Canapé fijo sin patas", "280,00 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["673", "Canapé fijo con patas", "295,00 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["272", "Somier Multiláminas Regulador", "89,02 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["273", "Somier Multiláminas Lumbar", "152,76 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["681", "Base Tapizada Piqué Basic sin patas", "68,00 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["680", "Base Tapizada Microfibra Maximum si", "82,80 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["421", "Base Tapizada Piqué Basic con patas", "86,00 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["679", "Base Tapizada 3D Luxe sin patas", "90,00 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["682", "Base Tapizada Marco 3D Premium sin", "90,00 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["271", "Base Tapizada Microfibra Maximum co", "104,40 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["384", "Base Tapizada 3D Luxe con patas", "111,60 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["410", "Base Tapizada Marco + 3D Premium co", "111,60 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["619", "Protector Transpirable-Impermeable", "33,00 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["670", "Funda colchon para reemplazo", "6,00 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["641", "Funda protector de almohada imperm", "8,85 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["368", "Almohada Visco Basic", "31,17 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["380", "Almohada Visco Form", "37,40 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["552", "Relleno de cojín de fibra hueca", "4,44 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["324", "Baúl Santorini Recto", "99,00 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["326", "Baúl Atenas", "109,00 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["327", "Baúl Corfu", "119,00 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["331", "Baúl Eleuxis", "129,00 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["328", "Baúl Naxos", "149,00 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["341", "Baúl Heracles", "149,00 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["342", "Baúl Alethea", "149,00 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["643", "Cómoda de 1 cajón de 100 cms Vintage", "109,99 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["653", "Mesa de escritorio Vintage", "109,99 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["644", "Sinfonier de 1 cajón de 70 cms Vintage", "99,99 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["658", "Espejo de madera con cristal", "77,90 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["657", "Espejo de madera sin cristal", "54,90 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["674", "Catalogo 1 tejidos Polipiel", "0,00 €", "/placeholder.svg?height=50&width=50", "", "", null]);
                db.run(insert, ["695", "Catalogo 2 tejidos textil suave", "0,00 €", "/placeholder.svg?height=50&width=50", "", "", null]);
            }
        });  
    }
});

module.exports = db;
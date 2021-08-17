// db.produtos.find();
db.produtos.find({ nome: /Mc/i }).count();

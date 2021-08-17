// db.produtos.find();
db.produtos.updateMany({}, { $set: { criadoPor: "Ronaldo McDonald" } });
db.produtos.find({}, { criadoPor: 1, nome: 1, _id: 0 });

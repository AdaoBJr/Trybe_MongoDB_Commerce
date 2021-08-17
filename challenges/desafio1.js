// db.produtos.find();
db.produtos.updateMany({}, { $set: { criadoPor: "Ronaldo McDonald" } });
db.produtos.find({}, { _id: 0, nome: 1, criadoPor: 1 });

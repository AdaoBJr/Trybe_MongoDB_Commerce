db.produtos.updateMany({}, { $set: { criadoPor: "Ronald MacDonald" } });
db.produtos.find({}, { nome: 1, criadoPor: 1, _id: 0 });

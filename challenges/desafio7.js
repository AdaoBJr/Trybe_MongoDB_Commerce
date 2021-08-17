// db.produtos.find();
db.produtos.updateMany(
  { },
  { $pull: { ingredientes: "cebola" } },
  { upsert: true },
);
db.produtos.find(
  {},
  { nome: 1, ingredientes: 1, _id: 0 },
);

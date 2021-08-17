// db.produtos.find();
db.produtos.updateMany(
  { nome: { $in: ["Big Mac", "Quarteirão com Queijo"] } },
  { $addToSet: { ingredientes: "bacon" } },
  { upsert: true },
);
db.produtos.find(
  {},
  { nome: 1, ingredientes: 1, _id: 0 },
);

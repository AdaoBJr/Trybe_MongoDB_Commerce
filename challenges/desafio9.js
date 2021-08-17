// db.produtos.find();
db.produtos.updateOne(
  { nome: "Cheddar McMelt" },
  { $pop: { ingredientes: 1 } },
  { upsert: true },
);
db.produtos.find(
  {},
  { nome: 1, ingredientes: 1, _id: 0 },
);

// db.produtos.find();
db.produtos.updateMany(
  {},
  { $set: { valorUnitario: NumberDecimal("0.00") } },
  { upsert: true },
);
db.produtos.find({}, { valorUnitario: 1, nome: 1, _id: 0 });

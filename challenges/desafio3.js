// db.produtos.find();
db.produtos.updateMany(
  {},
  { $set: { avaliacao: NumberInt(0) } },
  { upsert: true },
);
db.produtos.updateMany(
  { tags: "bovino" },
  { $set: { avaliacao: 5 } },
  { upsert: true },
);
db.produtos.updateMany(
  { tags: "ave" },
  { $set: { avaliacao: 3 } },
  { upsert: true },
);
db.produtos.find({}, { avaliacao: 1, nome: 1, _id: 0 });

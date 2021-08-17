db.produtos.update(
  {},
  {
    $set: { avaliacao: NumberInt(0) },
  },
  false,
  true,
);

db.produtos.update(
  { tags: { $regex: "bovino" } },
  { $set: { avaliacao: 5 } },
  { multi: true },
);

db.produtos.update(
  { tags: { $regex: "ave" } },
  { $inc: { avaliacao: 3 } },
  { multi: true },
);

db.produtos.find(
  {},
  { _id: 0, nome: 1, avaliacao: 1 },
);
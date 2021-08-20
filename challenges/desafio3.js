db.produtos.updateMany({}, { $set: { avaliacao: NumberInt("0") } });

db.produtos.updateMany(
  { tags: { $regex: /bovino/i } },
  { $inc: { avaliacao: 5 } },
);

db.produtos.updateMany(
  { tags: { $regex: /ave/i } },
  { $inc: { avaliacao: 3 } },
);

db.produtos.find({}, { _id: 0, nome: 1, avaliacao: 1 });
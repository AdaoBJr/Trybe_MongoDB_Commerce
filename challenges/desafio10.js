// db.produtos.find();
// db.produtos.remove({"_id": ObjectId("611bc8bcdbaa2a3f55af1335")});
db.produtos.updateMany(
  {},
  { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } },
  { upsert: true },
);
db.produtos.updateOne(
  { nome: "Big Mac" },
  { $inc: { "vendasPorDia.3": 60 } },
  // { $set: { vendasPorDia: [0, 0, 0, 60, 0, 0, 0] } },
  // { upsert: true }
);
db.produtos.updateMany(
  { tags: { $in: ["bovino", "pão"] } },
  { $inc: { "vendasPorDia.6": 120 } },
);
db.produtos.find(
  {},
  { nome: 1, vendasPorDia: 1, _id: 0 },
);

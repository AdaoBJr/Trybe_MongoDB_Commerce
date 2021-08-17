// db.produtos.find();
db.produtos.updateOne(
  { nome: "Big Mac" },
  { $set: { ultimaModificacao: new Date() } },
  { upsert: true },
);
db.produtos.find(
  { ultimaModificacao: { $exists: true } },
  { ultimaModificacao: 1, _id: 0 },
);

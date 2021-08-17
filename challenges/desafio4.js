db.produtos.updateOne(
  { nome: "Big Mac" },
  { $currentDate: { ultimaModificacao: true } },
  { uprset: true },
);

db.produtos.find(
  { ultimaModificacao: { $exists: true } },
  { _id: 0, nome: 1, avaliacao: 1 },
);

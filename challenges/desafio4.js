db.produtos.updateMany(
  { nome: "Big Mac" },
  { $currentDate: { ultimaModificacao: { $type: true } } },
);

db.produtos.find(
  { ultimaModificacao: { $exists: true } },
  { _id: 0, nome: 1 },
);

// db.produtos.find();

db.produtos.updateOne(
  { nome: "Big Mac" },
  {
    $currentDate: {
      // ultimaModificacao: { $type: "timestamp" },
      ultimaModificacao: true,
    },
  },
);

db.produtos.find(
  { ultimaModificacao: { $exists: true } },
  { nome: 1, _id: 0 },
);

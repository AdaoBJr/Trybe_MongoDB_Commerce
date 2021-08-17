// query 1:
db.produtos.updateOne(
  { nome: "Big Mac" },
  {
    $currentDate: {
      ultimaModificacao: { $type: "date" },
    },
  },
);

// query 2:
db.produtos.find(
  { ultimaModificacao:
    { $exists: true },
  },
  {
    _id: false,
    nome: true,
  },
);

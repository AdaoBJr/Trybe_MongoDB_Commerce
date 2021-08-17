// query 1:
db.produtos.updateOne(
  { nome: "Cheddar McMelt" },
  { $pop:
    { ingredientes: 1 },
  },
);

// query 2:
db.produtos.find(
  {},
  {
    _id: false,
    nome: true,
    ingredientes: true,
  },
);
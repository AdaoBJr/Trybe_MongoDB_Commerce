// query 1:
db.produtos.updateMany(
  {},
  { $set:
    { criadoPor: "Ronald McDonald" },
  },
);

// query 2:
db.produtos.find(
  {},
  {
    _id: false,
    nome: true,
    criadoPor: true,
  },
);

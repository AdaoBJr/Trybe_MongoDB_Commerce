db.produtos.createIndex(
  {
    nome: "Big Mac",
  },
  {
    $set: {
      curtidas: "",
    },
  },
);

db.produtos.find(
  {},
  {
    _id: false,
    nome: true,
    curtidas: true,
  },
);

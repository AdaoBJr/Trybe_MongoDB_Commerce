db.produtos.updateMany(
  {
    nome: { $all: [
        "Big Mac",
        "Quarteirão com Queijo",
      ],
    },
  },
  {
    $set: {
      ingredientes: "bacon",
    },
  },
);

db.produtos.find(
  {},
  {
    _id: 0,
    nome: 1,
    ingredientes: 1,
  },
);

db.produtos.updateMany(
  {
    valoresNutricionais: {
      tipo: "sódio",
      percentual: { $gt: 20, $lt: 40 },
    },
  },
  {
    $push: {
      tags: "contém sódio",
    },
  },
);

db.produtos.find(
  {},
  {
    _id: false,
    nome: true,
    tags: true,
  },
);

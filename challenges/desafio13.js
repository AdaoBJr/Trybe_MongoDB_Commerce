// query 1:
db.produtos.updateMany(
  { "valoresNutricionais.percentual":
    { $gte: 40 },
  },
  { $push: 
    { tags: "muito sódio" },
  },
);

// query 2:
db.produtos.find(
  {},
  { 
    _id: false,
    nome: true,
    tags: true,
  },
);

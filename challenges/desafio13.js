// query 1:
db.produtos.updateMany(
  { "valoresNutricionais.2.percentual":
    { $gte: 40 },
  },
  { $push: 
    { tags:
      { $each: ["muito sódio"] },
    },
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

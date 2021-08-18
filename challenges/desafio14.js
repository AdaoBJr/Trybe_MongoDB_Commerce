// query 1:
db.produtos.updateMany(
  { "valoresNutricionais.2.percentual":
    { $gt: 20, $lt: 40 },
  },
  { $push: 
    { tags:
      { $each: ["contém sódio"] },
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

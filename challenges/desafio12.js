// query 1:
db.produtos.updateMany(
  {},
  { $push: 
    { valoresNutricionais:
      { 
        $each: [],
        $sort: { percentual: -1 },
      },
    },
  },
);

// query 2: 
db.produtos.find(
  {},
  { 
    _id: false,
    nome: true,
    valoresNutricionais: true,
  },
);

// query 1:
db.produtos.updateMany(
  { nome:
    { $in: 
      ["Big Mac", "Quarteirão com Queijo"],
    },
  },
  { $push:
    { ingredientes: "bacon" },
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

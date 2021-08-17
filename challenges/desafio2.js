// query 1:
db.produtos.updateMany(
  { valorUnitario: { $exists: false } },
  { $set:
    { valorUnitario: 
      NumberDecimal("0.00"),
    },
  },
);

// query 2:
db.produtos.find(
  {},
  { 
    _id: false,
    nome: true,
    valorUnitario: true,
  },
);

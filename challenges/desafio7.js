// query 1:
db.produtos.updateMany(
  {},
  { 
    $pull: {
      ingredientes: "cebola",
    }, 
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

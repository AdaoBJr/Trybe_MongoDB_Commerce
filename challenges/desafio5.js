db.produtos.updateMany(
  {
    name: {
      $ne: "McChicken",
    },
  },
  {
    $addToSet: {
      ingredientes: "ketchup",
    },
  },
);

db.produtos.find(
  {},
  {
    _id: false,
    nome: true,
    ingredientes: true,
  },
);

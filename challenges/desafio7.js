db.produtos.updateMany(
    {},
    {
        $pull: {
          ingredientes: "cebola",
        },
    },
    { upsert: true },
);
  
db.produtos.find(
    {},
    {
        _id: 0,
        nome: 1,
        ingredientes: 1,
    },
);

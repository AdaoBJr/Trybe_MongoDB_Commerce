db.produtos.updateMany(
    { nome: "Cheddar McMelt" },
    {
        $pop: {
          ingredientes: 1,
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

db.produtos.updateMany(
    {},
    {
      $set: {
        vendasPorDia: [0, 0, 0, 0, 0, 0, 0],
      },
    },
    { upsert: true },
  );
  
  db.produtos.updateMany(
    { nome: "Big Mac" },
    {
      $inc: { "vendasPorDia.3": 60 },
    },
    { upsert: true },
  );
  
  db.produtos.updateMany(
    { 
      tags: { $all: ["bovino", "pão"] },
    },
    {
      $inc: { "vendasPorDia.6": 120 },
    },
    { upsert: true },
  );
    
  db.produtos.find(
    {},
    {
      _id: 0,
      nome: 1,
      vendasPorDia: 1,
    },
  );
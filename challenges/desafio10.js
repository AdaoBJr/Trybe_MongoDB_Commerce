// query 1:
db.produtos.updateMany(
  {},
  { $push:
      { vendasPorDia: 
          { $each: [0, 0, 0, 0, 0, 0, 0] },
      },
  },
);

// query 2:
db.produtos.updateOne(
  { nome: "Big Mac" },
  { $inc: {
    "vendasPorDia.3": 60,
  } },
);

// query 3:
db.produtos.updateMany(
  { tags: { $in: ["bovino", "pão"] } },
  { $inc: {
    "vendasPorDia.6": 120,
  } },
);

// query 4:
db.produtos.find(
  {},
  { 
    _id: false,
    nome: true,
    vendasPorDia: true,
  },
);

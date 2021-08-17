db.produtos.updateMany(
  {},
  { $push: {
    vendasPorDia: {
      $each: [
        0, 0, 0, 0, 0, 0, 0,
      ],
    },
  },
  },
);

db.produtos.updateOne(
  { nome: { $eq: "Big Mac" } },
  { $set: {
      "vendasPorDia.4": 60,
    },
  },  
);

db.produtos.updateMany(
  { tags: { $eq: ["bovino", "pão"] } },
  { $set: {
    "vendasPorDia.7": 120,
    },
  },
);

db.produtos.find(
  {},
  { nome: 1, vendasPorDia: 1, _id: 0 },
);

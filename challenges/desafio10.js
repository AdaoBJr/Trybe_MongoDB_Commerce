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
  { $push: {
    vendasPorDia: {
      $each: [60],
      $position: 4,
    },
  },
  },
);

db.produtos.updateMany(
  { tags: { $eq: ["bovino", "pão"] } },
  { $push: {
    vendasPorDia: {
      $each: [120],
      $position: 7,
    },
  },
 },
);

db.produtos.find(
  {},
  { nome: 1, vendasPorDia: 1, _id: 0 },
);

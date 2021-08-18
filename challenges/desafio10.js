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
    $push: {
      vendasPorDia: {
        $each: [60],
        $position: 3,
      },
    },
  },
);

db.produtos.updateMany(
  { tags: ["bovino", "pão"] },
  {
    $push: {
      vendasPorDia: {
        $each: [120],
        $position: 6,
        $slice: 7,
      },
    },
  },
);

db.produtos.find(
  {},
  {
    _id: 0,
    nome: 1,
    vendasPorDia: 1,
  },
);

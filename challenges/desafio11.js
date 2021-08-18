// query 1:
db.produtos.updateMany(
  {},
  { $push:
    { tags: 
      {
        $each: ["combo", "tasty"],
        $sort: 1,
      },
    },
  },
);

// query 2:
db.produtos.find(
  {},
  { 
    _id: false,
    nome: true,
    tags: true,
  },
);

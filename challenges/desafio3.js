// query 1:
db.produtos.updateMany(
  {},
  { $set:
    { avaliacao: NumberInt(0) },
  },
);

// query 2:
db.produtos.updateMany(
  { tags: "bovino" },
  { $inc:
    { avaliacao: 5 },
  },
);

// query 3: 
db.produtos.updateMany(
  { tags: "ave" },
  { $inc:
    { avaliacao: 3 },
  },
);

// query 4:
db.produtos.find(
  {},
  {
    _id: false,
    nome: true,
    avaliacao: true,
  },
);

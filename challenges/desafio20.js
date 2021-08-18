// query 1:
db.produtos.updateMany(
  { nome: "Big Mac" },
  { $unset: { curtidas: "" } },
);

// query 2:
db.produtos.find(
  {},
  { 
    _id: false,
    nome: true,
    curtidas: true,
  },
);

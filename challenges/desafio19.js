// query 1:
db.produtos.updateMany(
  {},
  { $rename: 
    { descricao: "descricaoSite" },
  },
);

// query 2:
db.produtos.find(
  {},
  { 
    _id: false,
    nome: true,
    descricao: true,
    descricaoSite: true,
  },
);

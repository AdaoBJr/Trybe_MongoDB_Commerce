db.produtos.updateMany(
  {},
  {},
);

db.produtos.find(
  {},
  {
    _id: false,
    nome: true,
    avaliacao: true,
  }
);

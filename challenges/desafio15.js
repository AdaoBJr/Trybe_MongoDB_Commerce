db.produtos.count({
  nome: { $regex: /MC/gi },
});

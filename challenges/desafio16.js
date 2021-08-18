db.produtos.count(
  { ingredientes: { $size: 5 } },
);

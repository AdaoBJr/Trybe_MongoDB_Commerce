db.produtos.find(
  { ingredientes: { $size: 5 } },
).count();

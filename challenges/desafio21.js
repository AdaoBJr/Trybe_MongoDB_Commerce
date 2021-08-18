db.produtos.find({ $expr: ["curtidas", "vendidos"] });

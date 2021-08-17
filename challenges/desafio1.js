db.produtos.update(
  {},
  {
    $set: {"criadoPor": "Ronald McDonald"}
  },
  false,
  true,
);

db.produtos.find(
  {},
  {_id: 0, "nome": 1, "criadoPor": 1},
);
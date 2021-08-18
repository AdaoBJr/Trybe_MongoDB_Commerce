db.produtos.updateMany(
 {}, { $set: { avaliacao: NumberInt(0) } },
);

db.produtos.updateMany(
  { tags: { $all: ["bovino"] } }, { $set: { avaliacao: NumberInt(5) } },
 );

db.produtos.updateMany(
  { tags: { $all: ["ave"] } }, { $set: { avaliacao: NumberInt(3) } },
);

db.produtos.find(
  {}, { nome: true, avaliacao: true, _id: false },
);

db.produtos.updateMany({}, { $set: { avaliacao: NumberInt("0") } });
db.produtos.updateMany({ tags:
  { $elemMatch: { $eq: "bovino" } } }, { $inc: { avaliacao: NumberInt("5") } });
db.produtos.updateMany({ tags:
  { $elemMatch: { $eq: "ave" } } }, { $inc: { avaliacao: NumberInt("3") } });
db.produtos.find({}, { nome: 1, avaliacao: 1, _id: 0 });
db.produtos.updateMany({}, { $set: { avaliacao: NumberInt(0) } });

db.produtos.updateMany({ tags: "bovino" }, { $inc: { avaliacao: 5 } });

db.produtos.updateMany({}, { $push: { vendasPorDia: { $each: [0, 0, 0, 0, 0, 0, 0] } } });

db.produtos.updateOne({ nome: "Big Mac" }, { $set: { "vendasPorDia.3": NumberInt(60) } });

db.produtos.updateOne(
  { 
    tags: { 
      $all: ["bovino", "pão"], 
    }, 
  }, 
  { $set: { "vendasPorDia.6": NumberInt(120) } },
);

db.produtos.find({}, { _id: false, nome: true, vendasPorDia: true });
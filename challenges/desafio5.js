db.produtos.updateMany(
  {
    nome: {
      $in: ["Big Mac", "Quarteirão com Queijo", "Cheddar McMelt", "Extra Chicken"],
    },
  },
  { $addToSet: { ingredientes: "ketchup" } },
);

db.produtos.find({}, { _id: false, nome: true, ingredientes: true });

db.produtos.updateOne({ nome: { $eq: "Quarteirão com Queijo"} }, {
  $pop: { ingredientes: -1 }
})

db.produtos.find({}, { _id: 0, ingredientes: 1, nome: 1 })
db.produtos.updateMany(
  { valoresNutricionais:
    { $elemMatch:
     { tipo: "sódio", percentual: { $gte: 40 } },
    }, 
  },
 { $push: { tags: "muito muito sodio" } },
); 

db.produtos.find({ }, { nome: 1, tags: 1, _id: 0 });

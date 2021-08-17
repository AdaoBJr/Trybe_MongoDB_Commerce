db.produtos.updateMany(
    {},
    { $push: {
        $each: [{ valorUnitario: NumberDecimal(0.00) }] },
    },

 );

db.produtos.find({}, { _id: false, nome: true, valorUnitario: true });

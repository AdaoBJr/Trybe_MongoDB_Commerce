db.produtos.update(
    { },
    {
        $pull: { ingredientes: "cebola" },
    },
    { multi: true },
);

db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });

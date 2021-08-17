db.produtos.count({ nome: { $regex: /.*(Mc).*/gi } });

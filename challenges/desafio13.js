dbb.produtos.updateMany(
    {},
    {
        $push:
        {
            tags: { 
                $each: [ "muito sódio" ],
            },
        },
    },
);
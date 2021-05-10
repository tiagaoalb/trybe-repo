db.clientes.aggregate([{ $group: { _id: '$sexo', total: { $sum: 1 } } }]);

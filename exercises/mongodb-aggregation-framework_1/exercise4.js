db.clientes.aggregate([
  { $match: { 'endereco.uf': 'SC' } },
  { $group: { _id: 'SC', total: { $sum: 1 } } },
]);

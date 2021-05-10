db.vendas.aggregate([
  { $group: { _id: '$clienteId', totalCompras: { $sum: 1 } } },
  { $match: { totalCompras: { $gt: 5 } } },
  { $count: 'clientes' },
]);

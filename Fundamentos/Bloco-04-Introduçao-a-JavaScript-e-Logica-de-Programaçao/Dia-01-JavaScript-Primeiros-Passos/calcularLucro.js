const cost = 50;
const price = 100;

if (cost <= 0 || price <= 0 ) {
  console.log('valores inválidos');
} else {
  const totalCost = cost + (cost * 0.2);
  // no exercício, considera-se a venda de 1000 produtos.
  const profit = (price - totalCost) * 1000;
  console.log(profit);
}

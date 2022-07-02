export const formatPrice = (price: number) => {
  const newPrice = price.toString().replace('.', ',');
  if (!newPrice[newPrice.indexOf(',') + 2]) {
    return newPrice + '0';
  }
  return newPrice;
};

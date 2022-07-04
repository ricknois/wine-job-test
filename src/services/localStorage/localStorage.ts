export const addItemToLocalStorage = (name: string, price: number, id: number) => {
  const data = [
    {
      name,
      price,
      id,
    },
  ];
  if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify(data));
  } else {
    const oldData = localStorage.getItem('cart');
    if (typeof oldData === 'string') {
      const newData = [...JSON.parse(oldData), ...data];
      localStorage.setItem('cart', JSON.stringify(newData));
    }
  }
};

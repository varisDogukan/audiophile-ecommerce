export const sortWithNew = (a, b) => {
  return b.new - a.new;
};

export const numberFormat = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  })
    .format(number)
    .replace('$', '')
    .trim();
};

export const calculatePrice = (array) => {
  const total = array?.reduce((acc, item) => acc + item.price * item.count, 0);

  return total;
};

export const calculateVat = (number) => {
  return number * 0.2;
};

export const addObj = (obj, value) => {
  let newArray = [...obj];

  const check = newArray.find((item) => item.id === value.id);

  if (check) {
    return newArray.map((item) => {
      if (item.id === value.id) {
        return {
          ...item,
          count: (item.count += value.count),
        };
      }
      return item;
    });
  } else {
    newArray = [...newArray, value];
  }

  return newArray;
};

export const changeCartsValue = (carts, operator, id) => {
  let tempCart = carts
    .map((cartItem) => {
      if (cartItem.id === id) {
        return {
          ...cartItem,
          count: operator === '-' ? cartItem.count - 1 : cartItem.count + 1,
        };
      }
      return cartItem;
    })
    .filter((cartItem) => cartItem.count !== 0);

  return tempCart;
};

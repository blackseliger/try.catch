const numberOfGoods = (item) => {
  try {
    // eslint-disable-next-line no-restricted-globals
    if (typeof item === 'number') return item;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('Введенный знак не является числом');
  }
  return item;
};

const test2 = numberOfGoods('d');

console.log(test2);

export default numberOfGoods;

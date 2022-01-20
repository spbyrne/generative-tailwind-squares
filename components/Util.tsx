export const limitPalette = (palette, color) => {
  return palette.filter((testColor) => testColor !== color);
};

export const getRandomInt = (random, min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(random() * (max - min + 1)) + min;
};

export const randomFromArray = (random, array) => {
  return array[getRandomInt(random, 0, array.length - 1)];
};

export const randomProperty = (random, obj) => {
  var keys = Object.keys(obj);
  return obj[keys[(keys.length * random()) << 0]];
};

export const randomKey = (random, obj) => {
  var keys = Object.keys(obj);
  return keys[(keys.length * random()) << 0];
};

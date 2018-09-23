export const randomIntInRange = (min, max) =>
  parseInt(min + Math.floor(Math.random() * (max - min)), 10);

export const randomFloatInRange = (min, max) =>
  min + Math.random() * (max - min);

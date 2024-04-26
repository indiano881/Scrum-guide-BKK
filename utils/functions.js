export const getImageURL = (imageName) => {
  return new URL(`../src/images/${imageName}`, import.meta.url).href;
};

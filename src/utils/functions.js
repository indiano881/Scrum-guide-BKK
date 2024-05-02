export const getImageURL = imageName => {
    return new URL(`../assets/images/${imageName}`, import.meta.url).href;
}
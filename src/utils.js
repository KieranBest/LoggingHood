export const getImageUrl = (path) => {
    return new URL(`/assets/Images/${path}`, import.meta.url).href;
};

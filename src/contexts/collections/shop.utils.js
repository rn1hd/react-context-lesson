export const getCollectionsForPreview = (collections) =>
  Object.keys(collections).map((key) => collections[key]);

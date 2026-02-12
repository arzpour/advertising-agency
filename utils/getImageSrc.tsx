// export const getImageSrc = (thumbnail: string, baseUrl: string) => {
//   if (!thumbnail) {
//     return "/gettyimages-2149038061-612x612.jpg";
//   }
//   if (!baseUrl) {
//     return "/gettyimages-2149038061-612x612.jpg";
//   }
//   return `${baseUrl}/${thumbnail}`;
// };

export const getImageSrc = (thumbnail: string, baseUrl: string) => {
  if (!thumbnail) {
    return "/gettyimages-2149038061-612x612.jpg";
  }
  if (thumbnail.startsWith("http")) {
    return thumbnail;
  }
  if (!baseUrl) {
    return "/gettyimages-2149038061-612x612.jpg";
  }
  return `${baseUrl}/${thumbnail}`;
};

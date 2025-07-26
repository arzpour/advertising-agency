// export function sanitizeHTML(html: string) {
//   const allowedTags = ["b", "i", "em", "strong", "p"];
//   if (typeof window === "undefined")
//     return html.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>?/gi, (match, tag) => {
//       return allowedTags.includes(tag.toLowerCase()) ? match : "";
//     });

//   const parser = new DOMParser();
//   const doc = parser.parseFromString(html, "text/html");
//   return doc.body.innerHTML;
// }

export const sanitizeHTML = (html: string | undefined | null): string => {
  const allowedTags = ["b", "i", "em", "strong", "p"];

  if (!html || typeof html !== "string") return "";

  return html.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>?/gi, (match, tag) => {
    return allowedTags.includes(tag.toLowerCase()) ? match : "";
  });
};

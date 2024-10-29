export function getImgUrl(name) {
  console.log(name);
  return new URL(`../assets/books/${name}`, import.meta.url);
}

function countWords(s) {
  return s
    .trim()
    .split(" ")
    .filter((word) => word !== "").length;
}

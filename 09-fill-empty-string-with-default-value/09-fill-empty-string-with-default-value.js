function fill(words, value) {
  result = words.map((word) => (word === "" ? value : word));
  return result;
}

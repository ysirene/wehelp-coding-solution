function ffill(words) {
  for (let i = 1; i < words.length; i++) {
    words[i] = words[i] === "" ? words[i - 1] : words[i];
  }
  return words;
}

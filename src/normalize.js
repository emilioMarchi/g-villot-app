// normalizar para string normal
export const normalizeString = (string) => {
    const words = string.split('-');
    const title = words.map((word, index) => {
      if (index === 0) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      } else {
        return word.toLowerCase();
      }
    });
    return title.join(' ');
  }
  //normalizar para url
export const normalizeUrl = (title) => {
    return title.toLowerCase().replace(/\s+/g, '-');
}
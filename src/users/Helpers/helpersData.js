export const colorList = {
  Medium: "#F39C12",
  Hard: "#E00E0E",
  Easy: "#27AE60",
  Array: "#EC7063",
  "Two Pointer": "#5499C7",
  "Hash Map": "#48C9B0",
  String: "#B03A2E ",
  "Number theory": "#34495E",
  "Linked List": "#8E44AD",
};
export function truncate(string, length) {
  if (string.length > length) return string.substring(0, length) + "...";
  else return string;
}

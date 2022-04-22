export const colorList = {
  Medium: "#F39C12",
  Hard: "#E00E0E",
  Easy: "#27AE60",
  Array: "#EC7063",
  "Two Pointers": "#5499C7",
  "Hash Map": "#48C9B0",
  String: "#B03A2E ",
  "Number Theory": "#34495E",
  "Linked List": "#8E44AD",
  Backtracking: "#BC58D6",
  "Sliding Window": "#45B39D",
  DP: "#81E035",
  Matrix: "#35C7E0",
  "Binary Search":'#CC106B'
};
export function truncate(string, length) {
  if (string.length > length) return string.substring(0, length) + "...";
  else return string;
}

export const defaultCode = {
  cpp: `#include <bits/stdc++.h>
using namespace std;

int main() {
cout<<"Hello World";
return 0;
}`,
  java: `class Main{

public static void main(String args[]) {
  System.out.println("Hello World");
  return 0;

}

}`,
  python: `print("Hello World")`,
};
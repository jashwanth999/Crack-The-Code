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
};
export function truncate(string, length) {
  if (string.length > length) return string.substring(0, length) + "...";
  else return string;
}

export const data = {
  subTopicName: "Class and Objects",
  description: `Class is blueprint or template for an Object 
 Class Animal has features
  1.breed
  2.Color
  3.food
 
Class Vehicle has features
    1.speed
    2.Color

To call a class objects are used .For class Animal  Cat, Dog are objects .For class Vehicle Car,Bike are objects
`,
  exampleCode: {
    code: `
 #include<bits/stdc++.h>
using namespace std;
    
class Animal {
    public:
      string animalName;
    
      Animal(string a) {
    
        animalName=a;
    
      }
    
      void eats(string foodName) {
        cout << animalName<<" eats " << foodName<<endl;
    
      }
    
};

// main function

int  main() {
    
      // declaring objects and passing parameters as animal name
      Animal dog("dog");
      Animal cat("cat");
    
      // Calling functions
    
      dog.eats("cat");
      
      cat.eats("mouse");
    
      return 0;
}
`,
    language: "cpp",
  },
  output: {
    code: `
dog eats cat

cat eats mouse
  `,
    language: "jsx",
  },
};

import { doc, setDoc } from "firebase/firestore";
import React from "react";
import { db } from "../Api/Firebase";
const data = {
  subTopicName: "Class and Objects",
  description: `Class is blueprint or template for an Object
  Class Animal has features
  1.breed
  2.Color
  3.food
  
  Class Vehicle has features
  1.speed
  2.Color
  
  To call a class objects are used .For class Animal Cat, Dog are objects .For class Vehicle Car,Bike are objects
    `,
  exampleCodesList: [
    {
      exampleCodeName: "Calling class using objects",
      exampleCodeDescription: ``,
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
        cout << animalName<<" eats " << foodName;

    }

};
int  main() {

    // declaring objects and passing parameters as animal Name
    Animal dog("dog");
    Animal cat("cat");

    // Calling function

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
    },
  ],
  image: "https://www.guru99.com/images/java/052016_0704_ObjectsandC6.jpg",
  timestamp: new Date(),
};
export default function AddCS() {
  const addProblem = () => {
    try {
      setDoc(
        doc(
          db,
          "CS-fundamentals",
          "OOPS-Concept",
          "subtopics",
          "Class-and-Objects"
        ),
        data
      );
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div style={{ height: "92vh" }}>
      <button onClick={addProblem}> AddCS</button>
    </div>
  );
}

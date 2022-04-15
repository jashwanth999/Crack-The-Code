import { doc, setDoc } from "firebase/firestore";
import React from "react";
import { db } from "../Api/Firebase";
const data = {
  subTopicName: "Encapsulation",
  description: `Encapsulation is wraping or bundling data members and functions inside a class

1.The data members should be labeled as private using the private access specifiers
2.The member function which manipulates the data members should be labeled as public using the public access specifier
    `,
  exampleCode: {
    code: `
#include<bits/stdc++.h>
using namespace std;
  
class Encapsulation
    {
        private:
            // data hidden from outside world
            int x;
              
        public:
            // function to set value of 
            // variable x
            void set(int a)
            {
                x =a;
            }
              
            // function to return value of
            // variable x
            int get()
            {
                return x;
            }
};
      
    // main function
int main()
    {
        Encapsulation obj;
          
        obj.set(5);
          
        cout<<obj.get();
        return 0;
}
    `,
    language: "cpp",
  },
  output: {
    code: `
2
      `,
    language: "jsx",
  },
};
export default function AddCS() {
  const addProblem = () => {
    try {
      setDoc(doc(db, "CS-fundamentals", "Encapsulation"), data);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div>
      <button onClick={addProblem}> AddCS</button>
    </div>
  );
}

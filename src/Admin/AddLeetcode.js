import { doc, setDoc } from "firebase/firestore";
import React from "react";
import { db } from "../Api/Firebase";
const data = {
  problemName: "9 Palindrome Number",
  difficult: "Easy",
  problemStatement: `Given an integer x, return true if x is palindrome integer.  An integer is a palindrome when it reads the same backward as forward.
 
  For example, 121 is a palindrome while 123 is not.`,
  testCases: {
    code: `
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

`,
    language: "jsx",
  },

  approachList: [
    {
      approachName: "Brute Force",
      code: `
      class Solution {
        public:
            bool isPalindrome(int x) {
                 string s;
                 s+=to_string(x);
                 int n=s.length();
                 for(int i=0;i<n/2;i++){
                      if(s[i] != s[n-i-1]) return 0;
                 }
                 return 1;
            }
        };
        `,
      language: "cpp",
      complexity: {
        timeComplexity: "O(n)",
        timeDesc: `
        Single for loop is used to check the palindrome
         `,
        spaceComplexity: "O(n)",
        spaceDesc: "Extra space is used from converting int to string",
      },
      approachDescription: `
        Converting int to string and checking first and last char equal or not
      `,
    },
    {
      approachName: "Brute Force with Optimized space",
      code: `
      class Solution {
        public:
            bool isPalindrome(int x) {
                if(x<0) return 0;
                long rev=0;
                int t=x;
                while(x)
                {
                     rev=rev*10+(x%10);
                     x/=10;
                }
                return (t==rev or t==rev/10);
                
            }
        };
          `,
      language: "cpp",
      complexity: {
        timeComplexity: "O(n)",
        timeDesc: `
          Single while loop is used to reverse an Integer
           `,
        spaceComplexity: "O(1)",
        spaceDesc: "Used constant space",
      },
      approachDescription: `
          reversing an integer mod 10 and div 10 and mul 10
        `,
    },
  ],
  links: "https://youtube.com/embed/yubRKwixN-U",
  tags: ["Number theory", "String"],
  timestamp: new Date(),
};

export default function AddLeetcode() {
  const addProblem = () => {
    try {
      setDoc(doc(db, "leetcode-solutions", "9-Palindrome-Number"), data);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div>
      <button onClick={addProblem}> AddLeetcode</button>
    </div>
  );
}

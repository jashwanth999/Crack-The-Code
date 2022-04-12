import { doc, setDoc } from "firebase/firestore";
import React from "react";
import { db } from "../Api/Firebase";
const data = {
  problemName: "5 Longest Palindromic Substring",
  difficult: "Medium",
  problemStatement: `Given a string s, return the longest palindromic substring in s.`,
  testCases: {
    code: `
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.


Input: s = "cbbd"
Output: "bb"
`,
    language: "text",
  },

  approachList: [
    {
      approachName: "Brute Force (optimized version)",
      code: `
      class Solution {
        public:
            string longestPalindrome(string s) {
                int start=0,end=1,len=0;
                for(int i=1;i<s.length();i++)
                {
                    int l=i-1;
                    int r=i;
                    while(l>=0 and r<s.length() and s[l]==s[r])
                    {
                        if((r-l+1)>len)
                        {
                            len=r-l+1;
                            start=l;
                            end=r-l+1;
                        }
                        r++;
                        l--;
                        
                    }
                    l=i-1;
                    r=i+1;
                     while(l>=0 and r<s.length() and s[l]==s[r])
                    {
                        if((r-l+1)>len)
                        {
                            len=r-l+1;
                            start=l;
                            end=r-l+1;
                        }
                        r++;
                        l--;
                    }
                    
                }
                
                return s.substr(start,end);
            }
        };
        `,
      language: "cpp",
      complexity: {
        timeComplexity: "O(n^2)",
        timeDesc: `Nested loops are used 
        for loop - traverse 1 to length ogf string
        while loop - traverse for even and odd length of the string
         `,
        spaceComplexity: "O(1)",
        spaceDesc: "No extra space is used",
      },
      approachDescription: `
     Note - if a string should be palindrome it should have less the one odd frequency character
     Traversing for loop 
     checking while condition for both even and odd length of string palindrome or not
      `,
    },
  ],
  links: "https://youtube.com/embed/dRUpbt8vHpo",
  tags: ["Array"],
  timestamp: new Date(),
};

export default function AddLeetcode() {
  const addProblem = () => {
    try {
      setDoc(
        doc(db, "leetcode-solutions", "5-Longest-Palindromic-Substring"),
        data
      );
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

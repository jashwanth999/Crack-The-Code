import { doc, setDoc } from "firebase/firestore";
import React from "react";
import { db } from "../Api/Firebase";
const data = {
  problemName: "1 Two Sum",
  difficult: "Easy",
  problemStatement: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  
  You can return the answer in any order.`,

  testCases: {
    code: `
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Input: nums = [3,2,4], target = 6
Output: [1,2]

Input: nums = [3,3], target = 6
Output: [0,1]
`,
    language: "text",
  },

  approachList: [
    {
      approachName: "Hash Map",
      code: `
  class Solution {
       public:
            vector<int> twoSum(vector<int>& nums, int target) {
                unordered_map<int,int>mp;
                for(int i=0;i<nums.size();i++)
                {
                     if(mp[target-nums[i]])
                     {
                          return {i,mp[target-nums[i]]-1};
                     }
                    mp[nums[i]]=i+1;
                }
                return {};
     }
};
        `,
      language: "cpp",
      complexity: {
        timeComplexity: "O(n)",
        timeDesc: "Only single loop is used",
        spaceComplexity: "O(n)",
        spaceDesc: "Extra spaces used for Hash Map ",
      },
      approachDescription: `Traversing through forloop mapping val to index and checking whethere map[target - nums[i]] is found return pair else empty list`,
    },
  ],
  links: "https://youtube.com/embed/dRUpbt8vHpo",
  tags: ["Array", "Hash Map", "Two Pointer"],
  timestamp: new Date(),
};

export default function AddLeetcode() {
  const addProblem = () => {
    try {
      setDoc(doc(db, "leetcode-solutions", "1-Two-Sum"), data);
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

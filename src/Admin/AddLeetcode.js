import { doc, setDoc } from "firebase/firestore";
import React from "react";
import { db } from "../Api/Firebase";
const data = {
  problemName: "2 Add Two Numbers",
  difficult: "Medium",
  problemStatement: `You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

  You may assume the two numbers do not contain any leading zero, except the number 0 itself.`,
  testCases: {
    code: `
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.


Input: l1 = [0], l2 = [0]
Output: [0]
`,
    language: "jsx",
  },

  approachList: [
    {
      approachName: "Two Pointer",
      code: `
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
    ListNode* p=l1;
    ListNode* q=l2;
    int c=0;
    ListNode* curr=NULL;
    ListNode* res=NULL;
    while(p or q)
    {
        int s=c+(p?p->val:0)+(q?q->val:0);
        c=(s>=10?1:0);
        s=s%10;
        ListNode* temp= new ListNode(s);
        if (res==NULL) res=temp;
        else curr->next=temp;
        curr=temp;
        if(p) p=p->next;
        if(q) q=q->next;
        
    }
    
    if(c>0){
        curr->next=new ListNode(1);
    }
    return res;
    
    
  }
};
        `,
      language: "cpp",
      complexity: {
        timeComplexity: "O(n)",
        timeDesc: `
       Two Pointers are used single while loop (Line Num = 19 - 31)
        Extra spaces are used for two ListNodes
         `,
        spaceComplexity: "O(n)",
        spaceDesc: " Extra spaces are used for two ListNodes",
      },
      approachDescription: `
Traverse both lists to the end and add preceding zeros in the list with lesser digits. 
Then call a recursive function on the start nodes of both lists which calls itself 
for the next nodes of both lists till it gets to the end.   
This function creates a node for the sum of the current digits and returns the carry.

      `,
    },
  ],
  links: "https://youtube.com/embed/yubRKwixN-U",
  tags: ["Linked List", "Two Pointer"],
  timestamp: new Date(),
};

export default function AddLeetcode() {
  const addProblem = () => {
    try {
      setDoc(doc(db, "leetcode-solutions", "2-Add-Two-Numbers"), data);
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

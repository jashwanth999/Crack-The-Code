import { doc, setDoc, updateDoc } from "firebase/firestore";
import React from "react";
import { db } from "../Api/Firebase";
import Editor from "../users/Helpers/Editor";
import TextEditor from "../users/Helpers/TextEditor";
const data = {
  problemName: "2 Add Two Numbers",
  no: 2,
  difficult: "Medium",
  problemStatement: `
  You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

  You may assume the two numbers do not contain any leading zero, except the number 0 itself.
  `,
  testCases: {
    code: `Input: nums = [2,7,11,15], target = 9
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
      approachName: "Hash Map",
      approachDescription:
        " Traversing through forloop mapping val to index and checking whethere map[target - nums[i]] is found return pair else empty list",
      tags: ["Array", "Hash Map", "Two Pointer"],
      cpp: `/**
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
             ListNode* ans=NULL;
             ListNode* cur;
             while(p or q){
                 int val= (p ? p->val:0) +  (q ?q->val:0)+c;
                  c= val>=10?1:0;
                 val=val%10;
                 ListNode* temp=new ListNode(val);
                 if(!ans) ans=temp;
                 else cur->next=temp;
                 cur=temp;
                 if(p) p=p->next;
                 if(q) q=q->next;
             }
            if(c) cur->next=new ListNode(1);
             return ans;
         }
     }`,
      java: `/**
      * Definition for singly-linked list.
      * public class ListNode {
      *     int val;
      *     ListNode next;
      *     ListNode() {}
      *     ListNode(int val) { this.val = val; }
      *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
      * }
      */
     class Solution {
         public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
             
             ListNode p=l1;
             ListNode q=l2;
             int c=0;
             ListNode ans=null;
             ListNode cur=null;
             while(p!=null || q!=null){
                 int val= (p!=null ? p.val:0) +  (q!=null ?q.val:0)+c;
                  c= val>=10?1:0;
                 val=val%10;
                 ListNode temp=new ListNode(val);
                 if(ans==null) ans=temp;
                 else cur.next=temp;
                 cur=temp;
                 if(p!=null) p=p.next;
                 if(q!=null) q=q.next;
             }
            if(c>0) cur.next=new ListNode(1);
             return ans;
             
         }
     }
      `,
      python: `class Solution:
      # @return a tuple, (index1, index2)
      # 8:42
      def twoSum(self, num, target):
          map = {}
          for i in range(len(num)):
              if num[i] not in map:
                  map[target - num[i]] = i + 1
              else:
                  return map[num[i]], i + 1
  
          return -1, -1`,
      complexity: {
        timeComplexity: "O(n)",
        timeDesc: `
        Only single loop is used
           `,
        spaceComplexity: "O(n)",
        spaceDesc: "Extra spaces used for Hash Map",
      },
    },
  ],

  links: "https://youtu.be/dRUpbt8vHpo",
  timestamp: new Date(),
};

const approachList = [
  {
    approachName: "Two Pointer",
    approachDescription:
      " Traversing through forloop mapping val to index and checking whethere map[target - nums[i]] is found return pair else empty list",
    tags: ["Two Pointer"],
    cpp: `/**
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
           ListNode* ans=NULL;
           ListNode* cur;
           while(p or q){
               int val= (p ? p->val:0) +  (q ?q->val:0)+c;
                c= val>=10?1:0;
               val=val%10;
               ListNode* temp=new ListNode(val);
               if(!ans) ans=temp;
               else cur->next=temp;
               cur=temp;
               if(p) p=p->next;
               if(q) q=q->next;
           }
          if(c) cur->next=new ListNode(1);
           return ans;
       }
   }`,
    java: `/**
    * Definition for singly-linked list.
    * public class ListNode {
    *     int val;
    *     ListNode next;
    *     ListNode() {}
    *     ListNode(int val) { this.val = val; }
    *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
    * }
    */
   class Solution {
       public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
           
           ListNode p=l1;
           ListNode q=l2;
           int c=0;
           ListNode ans=null;
           ListNode cur=null;
           while(p!=null || q!=null){
               int val= (p!=null ? p.val:0) +  (q!=null ?q.val:0)+c;
                c= val>=10?1:0;
               val=val%10;
               ListNode temp=new ListNode(val);
               if(ans==null) ans=temp;
               else cur.next=temp;
               cur=temp;
               if(p!=null) p=p.next;
               if(q!=null) q=q.next;
           }
          if(c>0) cur.next=new ListNode(1);
           return ans;
           
       }
   }
    `,
    python: `def addTwoNumbers(self, l1, l2):
    dummy = cur = ListNode(0)
    carry = 0
    while l1 or l2 or carry:
        if l1:
            carry += l1.val
            l1 = l1.next
        if l2:
            carry += l2.val
            l2 = l2.next
        cur.next = ListNode(carry%10)
        cur = cur.next
        carry //= 10
    return dummy.next`,
    complexity: {
      timeComplexity: "O(n)",
      timeDesc: `
       Two Pointers are used single while loop        
         `,
      spaceComplexity: "O(n)",
      spaceDesc: " Extra spaces are used for two ListNodes",
    },
  },
];

export default function AddLeetcode() {
  const addProblem = () => {
    try {
      setDoc(doc(db, "leetcode-sols", "1-Two-Sum"), data);
    } catch (error) {
      alert(error.message);
    }
  };

  const updateProblem = () => {
    try {
      updateDoc(doc(db, "leetcode-solutions", "2-Add-Two-Numbers"), {
        approachList: approachList,
        timestamp: new Date(),
      });
    } catch (error) {
      alert(error.message);
    }
  };
  //
  //    <TextEditor />
  return (
    <div>
      <br />
      <button onClick={updateProblem}> AddLeetcode</button>
    </div>
  );
}

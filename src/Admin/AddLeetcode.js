import { doc, setDoc } from "firebase/firestore";
import React from "react";
import { db } from "../Api/Firebase";
const data = {
  problemName: "36 Valid Sudoku",
  no: 36,
  difficult: "Medium",
  problemStatement: `
  Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

  1.Each row must contain the digits 1-9 without repetition.
  2.Each column must contain the digits 1-9 without repetition.
  3.Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
  `,
  testCases: {
    code: `
    Input: board = 
    [["5","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]
    Output: true


    Input: board = 
    [["8","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]
    Output: false
    Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. 
    Since there are two 8's in the top left 3x3 sub-box, it is invalid.
`,
    language: "jsx",
  },

  approachList: [
    {
      approachName: "BackTracking",
      code: `
      class Solution {
        public:
            
            bool isValid(vector<vector<char>>& board,int r, int c,char x ){
                  board[r][c]='.';
                
                // checking row and col 
                  for(int i=0;i<9;i++){
                      
                      if(board[i][c]==x) return 0;
                      if(board[r][i]==x) return 0;
                      
                  }
                
                // checking 3*3 box 
                
                  for(int i=0;i<3;i++){
                      for(int j=0;j<3;j++){
                           if(board[r/3*3+i][c/3*3+j]==x) return 0;
                      }
                  }
                board[r][c]=x;
                return 1;
            }
            bool isValidSudoku(vector<vector<char>>& board) {
                
                for(int i=0;i<9;i++){
                    for(int j=0;j<9;j++){
                         if(board[i][j]!='.' && !isValid(board,i,j,board[i][j])) return 0;
                    }
                }
                
                return 1;
                
            }
        };
        `,
      language: "cpp",
      complexity: {
        timeComplexity: "O(n^2)",
        timeDesc: `
    Traversing 9*9 matrix and checking every column ,row and every 3*3 matrix needs n^2 time
   
         `,
        spaceComplexity: "O(1)",
        spaceDesc: "No Extra space is used",
      },
      approachDescription: `
Traverse 9*9 matrix 
   check every column,row and 3*3 matrix 


      `,
    },
  ],
  links: "https://www.youtube.com/embed/rJ9NFK9s_mI",
  tags: ["BackTracking"],
  timestamp: new Date(),
};

export default function AddLeetcode() {
  const addProblem = () => {
    try {
      setDoc(doc(db, "leetcode-solutions", "36-Valid-Sudoku"), data);
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

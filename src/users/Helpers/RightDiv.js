import { Paper, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import ExampleCode from "./exampleCode";
import YoutubeEmbed from "./YoutubeEmbed";
const testCases = [
  {
    code: `
    Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
        `,
    language: "text",
  },
  {
    code: `
    Input: nums = [3,2,4], target = 6
    Output: [1,2]`,
    language: "text",
  },
];

const approachList = [
  {
    approachName: "Two Pointer",
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
             };`,
    language: "cpp",
  },
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
          };`,
    language: "cpp",
  },
];

export default function RightDiv() {
  const { id } = useParams();
  const text = id.replace(/ /g, " ");
  return (
    <div>
      <h3 style={{ color: "#3498DB" }}>
        {" "}
        {text[0] + "." + " " + text.substring(2).replace(/-/g, " ")}
      </h3>
      <h3 style={headerStyle}> Problem Statement</h3>
      <Paper style={statementDiv} elevation={0}>
        <Typography style={{ margin: 10 }}>
          Given an array of integers nums and an integer target, return indices
          of the two numbers such that they add up to target. You may assume
          that each input would have exactly one solution, and you may not use
          the same element twice. You can return the answer in any order.
        </Typography>
      </Paper>
      <br />
      <h3 style={headerStyle}> Description</h3>
      <Paper style={statementDiv} elevation={0}>
        <Typography style={{ margin: 10 }}>
          Given an array of integers nums and an integer target, return indices
          of the two numbers such that they add up to target. You may assume
          that each input would have exactly one solution, and you may not use
          the same element twice. You can return the answer in any order.
          <br />
        </Typography>
      </Paper>
      <br />
      {testCases.map((data, index) => {
        return (
          <>
            <h3 style={headerStyle}> Test Cases {index + 1}</h3>

            <ExampleCode
              lineNum={false}
              code={data.code}
              language={data.language}
            />
          </>
        );
      })}

      <br />
      {approachList.map((data, index) => {
        return (
          <>
            <h3 style={headerStyle}>
              Approach {index + 1} - {data.approachName}{" "}
            </h3>
            <ExampleCode
              lineNum={true}
              language={data.language}
              code={data.code}
            />
          </>
        );
      })}
      <br />
      <h3 style={headerStyle}>Links</h3>
      <YoutubeEmbed />
      <br />
    </div>
  );
}
const statementDiv = {
  backgroundColor: "#ECF0F1",
  margin: 10,
  display: "flex",
  textAlign: "left",
};
const headerStyle = {
  textAlign: "left",
  margin: 10,
  borderLeft: "solid #2E86C1 4px",
  paddingTop: 0,
  paddingLeft: 5,
  paddingBottom: 0,
};



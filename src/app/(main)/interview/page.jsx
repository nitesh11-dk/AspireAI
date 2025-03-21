"use client";
import React, { useEffect } from "react";
import { generateQuiz } from "../../../../actions/interview";

const Interview = () => {
  useEffect(() => {
    let res = generateQuiz();
    console.log(res);
  });

  return <div>Interview</div>;
};

export default Interview;

import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = ["IFIAG","c'est", "la", "Famille"];

  return (
    <div className="">
      <h1 className="text-5xl font-semibold text-gray-950 ">
        <FlipWords words={words} /> 
      </h1>
    </div>
  );
}

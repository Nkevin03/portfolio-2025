  "use client";

import React from "react";

const FunFacts = () => {
  const facts = [
    { emoji: "☕", text: "Caffe al posto del sangue" },
    { emoji: "🎮", text: "Ex-Gamer a tempo pieno" },
    {
      emoji: "🧗‍♂️",
      text: 'Faccio arrampicata (in libera quando "Please check the error")',
    },
  ];

  return (
    <div className="bg-background rounded-lg p-4 max-w-lg mx-auto shadow-md">
      <h2 className="text-2xl font-bold mb-4">🎉 Fun Facts Su di Me</h2>
      <ul className="list-none p-0 m-0">
        {facts.map((fact, index) => (
          <li key={index} className="flex items-center justify-start gap-2">
            <span className="text-2xl">{fact.emoji}</span> {fact.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FunFacts;
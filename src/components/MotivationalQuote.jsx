import React from "react";

const MotivationalQuote = () => {
  const quotes = [
    "You are stronger than you think.",
    "Take a deep breath, it's just a bad day, not a bad life.",
    "Mental health is a priority, not a luxury.",
    "It's okay to not be okay.",
    "Self-care is how you take your power back.",
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="bg-warm-yellow/20 p-4 rounded-lg mb-6 text-center w-full max-w-md">
      <p className="text-lg italic text-gray-800">"{randomQuote}"</p>
    </div>
  );
};

export default MotivationalQuote;

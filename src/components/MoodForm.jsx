import React, { useState } from "react";

const MoodForm = ({ addMood }) => {
  const [selectedMood, setSelectedMood] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedMood) {
      addMood(selectedMood);
      setSelectedMood("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md mb-6 w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4 text-center text-calming-blue">
        Log Your Mood Today
      </h2>
      <div className="flex justify-center space-x-4 mb-4">
        <button
          type="button"
          onClick={() => setSelectedMood("happy")}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            selectedMood === "happy"
              ? "bg-soothing-green text-white"
              : "bg-gray-200 hover:bg-soothing-green/50"
          }`}>
          Happy 😊
        </button>
        <button
          type="button"
          onClick={() => setSelectedMood("sad")}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            selectedMood === "sad"
              ? "bg-calming-blue text-white"
              : "bg-gray-200 hover:bg-calming-blue/50"
          }`}>
          Sad 😔
        </button>
        <button
          type="button"
          onClick={() => setSelectedMood("anxious")}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            selectedMood === "anxious"
              ? "bg-warm-yellow text-white"
              : "bg-gray-200 hover:bg-warm-yellow/50"
          }`}>
          Anxious 😟
        </button>
      </div>
      <button
        type="submit"
        className="w-full bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors"
        disabled={!selectedMood}>
        Submit Mood
      </button>
    </form>
  );
};

export default MoodForm;

import React, { useState, useEffect } from "react";
import MoodForm from "./components/MoodForm";
import MoodChart from "./components/MoodChart";
import MotivationalQuote from "./components/MotivationalQuote";
import moment from "moment";
import "./App.css";

const App = () => {
  const [moods, setMoods] = useState([]);

  useEffect(() => {
    const storedMoods = JSON.parse(localStorage.getItem("moods")) || [];
    setMoods(storedMoods);
  }, []);

  useEffect(() => {
    localStorage.setItem("moods", JSON.stringify(moods));
  }, [moods]);

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "moods") {
        const updatedMoods = JSON.parse(e.newValue) || [];
        setMoods(updatedMoods);
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const addMood = (mood) => {
    const newMood = { date: moment().format("YYYY-MM-DD"), mood };
    setMoods((prevMoods) => [...prevMoods, newMood]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6 text-calming-blue">
        Mental Health Tracker
      </h1>
      <MoodForm addMood={addMood} />
      <MotivationalQuote />
      <MoodChart moods={moods} />
    </div>
  );
};

export default App;

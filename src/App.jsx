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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-between p-4">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-calming-blue">
          Mental Health Tracker
        </h1>
        <MoodForm addMood={addMood} />
        <MotivationalQuote />
        <MoodChart moods={moods} />
      </div>
      <footer className="mt-8 text-center text-gray-600">
        <p>
          Dibuat oleh{" "}
          <a
            href="https://www.linkedin.com/in/mwahyusp/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-calming-blue hover:underline">
            M Wahyu SP
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";

const Challenge1: React.FC = () => {
  // Timer state
  const [count, setCount] = useState<number>(0);

  // Joke state
  const [joke, setJoke] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Timer effect
  useEffect(() => {
    if (count >= 10) return; // stop after 10 seconds
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [count]);

  // Fetch Joke function
  const fetchJoke = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await res.json();
      setJoke(data.value); // joke text comes from "value"
    } catch (err) {
      setError("Failed to fetch joke");
    } finally {
      setLoading(false);
    }
  };

  // Fetch initial joke
  useEffect(() => {
    fetchJoke();
  }, []);

// Hard ★★★ — Auto-saving Form
// Controlled input: name and email.
// Auto-save to localStorage after 1 second debounce using useEffect.
// Show "Saved!" message after save.
// Tailwind: nice form card, responsive.
// Hint: use setTimeout inside useEffect, cleanup previous timeout.
// Commit: Day 6: autosave-form useEffect

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6">
      {/* Timer */}
      <p className="text-4xl font-bold">{count}</p>

      {/* Joke Section */}
      <div className="p-4 shadow-lg rounded-2xl bg-white max-w-md text-center">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && <p className="mb-4">{joke}</p>}
        <button
          onClick={fetchJoke}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
        >
          New Joke
        </button>
      </div>
    </div>
  );
};

export default Challenge1;

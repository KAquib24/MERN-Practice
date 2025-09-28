// import React from 'react'
import Challenge1 from "./challenge/challenge1";
import Challenge7 from "./challenge/Challenge7";
import Day1 from "./components/Day1";
import Day3 from "./components/day3";
import Day4 from "./components/Day4";
import Day5 from "./components/Day5";
import Day6 from "./components/Day6";
import Day7 from "./components/Day7";

const App = () => {
  return (
    <div>
      <Day1 />
      <Day3 />
      <Day4 />
      <Day5 />
      <Day6 />
      <Day7/>

      <h1>Challenges</h1>
      <Challenge1 />
      <Challenge7 />
    </div>
  );
};

export default App;

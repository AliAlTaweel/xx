import { useState } from "react";
import Button from "./Button";
import Display from "./Display";
import Statistic from "./Statistic";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  /* Handles functions S*/
  const handleGood = () => {
    const g = good + 1;
    setGood(g);
  };
  const handleNutral = () => {
    const n = neutral + 1;
    setNeutral(n);
  };
  const handleBad = () => {
    const b = bad + 1;
    setBad(b);
  };
  const total = good + neutral + bad;
  const avarage = total ? (good - bad) / total : 0;
  const positive = total ? (good / total)*100 : 0;
  return (
    <div>
      <p>
        give feedback
        <br />
      </p>
      <Button onHandle={handleGood} text="good" />
      <Button onHandle={handleNutral} text="nutral" />
      <Button onHandle={handleBad} text="bad" />
      <h1>Statistics</h1>
      {total === 0 ?(<p>No feedback given</p>):(
        <table>
          <tbody>
            <Statistic text='good' value={good} />
            <Statistic text='neutral' value={neutral} />
            <Statistic text='bad' value={bad} />
            <Statistic text='avarage' value={avarage} />
            <Statistic text='positive' value={positive} text1='%'/>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;

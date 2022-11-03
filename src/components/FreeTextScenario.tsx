import React, {useState, useEffect} from "react";
import * as style from "../styles/sidebar.module.css";
import * as scenarioData from "./scenarios.json";

const MIN_CHARACTERS = 20;

const FreeTextScenario = () => {
  const [scenarioNumber, setScenarioNumber] = useState(0);
  const [input, setInput] = useState("");
  
  const scenario = scenarioData[scenarioNumber];

  return (
    <div className={style.scenario}>
      <p>Scenario {scenarioNumber + 1}/{scenarioData.length} 
        <input type="button" value="Skip" onClick={() => skipScenario(scenarioNumber, setScenarioNumber)}/> 
        <input type ="button" value="Back" onClick={() => backScenario(scenarioNumber, setScenarioNumber)}/>
      </p>
      <h3>{scenario.title}</h3>
      <div className={style.description}>
      <p>{scenario.scenariotext}</p>
      </div>
      <textarea placeholder="Type your thoughts here..." onChange={(event) => setInput(event.target.value)}></textarea>
      <input type="button" disabled={input.length < MIN_CHARACTERS} value="Compare answers" onClick=/>
    </div>
  );
};

const skipScenario = (scenarioNumber, setScenarioNumber) => {
  if (scenarioNumber + 1 !== scenarioData.length) {
    setScenarioNumber(scenarioNumber + 1);
  }
}

const backScenario = (scenarioNumber, setScenarioNumber) => {
  if (scenarioNumber !== 0) {
    setScenarioNumber(scenarioNumber - 1);
  }
}

export default FreeTextScenario;


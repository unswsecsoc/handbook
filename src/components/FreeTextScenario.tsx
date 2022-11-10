import React, {useState, useEffect} from "react";
import * as style from "../styles/sidebar.module.css";
import * as scenarioData from "./scenarios.json";

// Minimum length of a scenario free-text response before we'll show user
// answers
const MIN_CHARACTERS = 20;

const FreeTextScenario = () => {
  const [scenarioNumber, setScenarioNumber] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  
  const scenario = scenarioData[scenarioNumber];

  const [inputs, setInputs] = useState(Array(scenarioData.length).fill(""));

  const updateTextField = (event) => {
    let replacementInputs = inputs;
    replacementInputs[scenarioNumber] = event.target.value;
    setInputs([...replacementInputs]);
  }

  console.log(inputs);
  console.log(scenarioNumber);

  return (
    <div className={style.scenario}>
      <p>Scenario {scenarioNumber + 1}/{scenarioData.length} 
        <input type="button" value="Skip" onClick={() => skipScenario(scenarioNumber, setScenarioNumber, setSubmitted)}/> 
        <input type ="button" value="Back" onClick={() => backScenario(scenarioNumber, setScenarioNumber, setSubmitted)}/>
      </p>

      <h3>{scenario.title}</h3>
      <div className={style.description}>
        {scenario.scenariotext.map((scenariopara) => (
          <p>{scenariopara}</p>
        ))}
      </div>

      {submitted &&
        <p><strong>You said:</strong></p>
      }
      <textarea disabled={submitted} placeholder="Type your thoughts here..." onChange={updateTextField} value={inputs[scenarioNumber]}></textarea>
      <p><input type="button" title="Write a thoughtful (more than 20 character) response before submitting!" disabled={inputs[scenarioNumber].length < MIN_CHARACTERS} value="Compare answers" onClick={() => setSubmitted(true)}/></p>

      {submitted &&
        <>
        <p><strong>Some of our ideas:</strong></p>
        <ul>
        {scenario.scenarioanswers.map((answer) => (
          <li>{answer}</li>
        ))}
        </ul>
        </>
      }
    </div>
  );
};

const skipScenario = (scenarioNumber, setScenarioNumber, setSubmitted) => {
  if (scenarioNumber + 1 !== scenarioData.length) {
    setScenarioNumber(scenarioNumber + 1);
  }
  setSubmitted(false);
}

const backScenario = (scenarioNumber, setScenarioNumber, setSubmitted) => {
  if (scenarioNumber !== 0) {
    setScenarioNumber(scenarioNumber - 1);
  }
  setSubmitted(false);
}

export default FreeTextScenario;


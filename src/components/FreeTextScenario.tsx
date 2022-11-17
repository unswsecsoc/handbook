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
      <p><span className={style.navigator}>Scenario {scenarioNumber + 1}/{scenarioData.length}</span>
        <button onClick={() => skipScenario(scenarioNumber, setScenarioNumber, setSubmitted)}>Skip</button>
        <button onClick={() => backScenario(scenarioNumber, setScenarioNumber, setSubmitted)}>Back</button>
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
      <p><button title="Write a thoughtful (more than 20 character) response before submitting!" disabled={inputs[scenarioNumber].length < MIN_CHARACTERS} onClick={() => setSubmitted(true)}>Compare answers</button></p>


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


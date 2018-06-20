import React from 'react'
import './middlePane.Style.scss'
import AccordionComponent from './AccordionComponent'
import SetupTearDown from './SetupTearDown'
import Step from './Step'
import Scenario from './Scenario'
import TestCase from './TestCaseAccordion'


const showSetup = (scenarioSetup,scenarioTearDown) => {
  if(scenarioSetup){
    return(
      <div>
        <SetupTearDown
          title='Setup'
        />
        <hr />
      </div>
    );
  }else{
    return null;
  }
}

const showTearDown = (scenarioTearDown) => {
  if(scenarioTearDown){
    return(
      <div>
        <SetupTearDown
          title='Tear Down'
        />
        <hr />
      </div>
    );
  }else{
    return null;
  }
}

const showTestCase = (scenarioTestCase) => {
  if(scenarioTestCase){
    return(
    <TestCase />
    );
  }else{
    return null;
  }
}



const middlePane =({scenarioSetup, scenarioTearDown, scenarioTestCase}) =>{
  console.log(scenarioTearDown)
  return(
    <div className='middle-pane'>
        <Scenario />
        <hr />
        {showSetup(scenarioSetup)}
        {showTearDown(scenarioTearDown)}
        {showTestCase(scenarioTestCase)}
    </div>
  );

}



export default middlePane;

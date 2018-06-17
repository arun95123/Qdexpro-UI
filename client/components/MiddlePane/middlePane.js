import React from 'react'
import './middlePane.Style.scss'
import AccordionComponent from './AccordionComponent'
import SetupTearDown from './SetupTearDown'
import Step from './Step'
import Scenario from './Scenario'


const showSetup = (scenarioSetup) => {
  console.log('%%%%%%%%%%%%%');
  if(scenarioSetup){
    <SetupTearDown
      title='Setup'
    />
  }else{
    null;
  }
}

const middlePane =({scenarioSetup}) =>(
    <div className='middle-pane'>
        <Scenario />
        <hr />
        {showSetup(scenarioSetup)}
        <AccordionComponent title='title'>
          <Step />
        </AccordionComponent>
        <hr />
    </div>
);

export default middlePane;

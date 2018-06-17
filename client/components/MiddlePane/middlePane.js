import React from 'react'
import './middlePane.Style.scss'
import AccordionComponent from './AccordionComponent'
import SetupTearDown from './SetupTearDown'
import Step from './Step'
import Scenario from './Scenario'


const showSetup = (scenarioSetup) => {
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

const middlePane =({scenarioSetup}) =>{
  return(
    <div className='middle-pane'>
        <Scenario />
        <hr />
        {showSetup(scenarioSetup)}
    </div>
  );

}



export default middlePane;

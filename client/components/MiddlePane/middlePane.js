import React from 'react'
import './middlePane.Style.scss'
import AccordionComponent from './AccordionComponent'
import SetupTearDown from './SetupTearDown'
import Step from './Step'
import Scenario from './Scenario'


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
  }else if(scenarioTearDown){
      return(
        <div>
          <SetupTearDown
            title='Tear Down'
          />
          <hr />
        </div>
      ); }
      else{
    return null;
  }
}

const middlePane =({scenarioSetup},{scenarioTearDown}) =>{
  console.log(scenarioTearDown)
  return(
    <div className='middle-pane'>
        <Scenario />
        <hr />
        {showSetup(scenarioSetup,scenarioTearDown)}
    </div>
  );

}



export default middlePane;

import React from 'react'
import './middlePane.Style.scss'
import AccordionComponent from './AccordionComponent'
import SetupTearDown from './SetupTearDown'
import Step from './Step'
import Scenario from './Scenario'
import TestCase from './TestCaseAccordion'

class middlePane extends React.Component {
  constructor(props){
    super(props);
    this.showSetup = this.showSetup.bind(this);
    this.showTearDown = this.showTearDown.bind(this);
    this.showTestCase = this.showTestCase.bind(this);
  }

  componentDidUpdate(){
     $('.ui.dropdown').dropdown();
  }

  showSetup(scenarioSetup){
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

  showTearDown(scenarioTearDown){
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

  showTestCase(scenarioTestCase){
    if(scenarioTestCase){
      return(
        <div>
          <TestCase />
          <hr />
        </div>
      );
    }else{
      return null;
    }
  }

  render() {
    const {scenarioSetup,scenarioTearDown,scenarioTestCase} = this.props;

    return(
      <div className='middle-pane'>
          <Scenario />
          <hr />
          {this.showSetup(scenarioSetup)}
          {this.showTestCase(scenarioTestCase)}
          {this.showTearDown(scenarioTearDown)}
      </div>
    );
  }
}



export default middlePane;

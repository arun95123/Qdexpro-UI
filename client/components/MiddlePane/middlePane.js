import React from 'react'
import './middlePane.Style.scss'
import {Modal,Button,Icon} from 'semantic-ui-react'
import AccordionComponent from './AccordionComponent'
import SetupTearDown from './SetupTearDown'
import Step from './Step'
import Scenario from './Scenario'
import TestCase from './TestCaseAccordion'
import ClassMapper from '../ClassMapper'

class middlePane extends React.Component {
  constructor(props){
    super(props);
    this.showSetup = this.showSetup.bind(this);
    this.showTearDown = this.showTearDown.bind(this);
    this.showTestCase = this.showTestCase.bind(this);
  }

  componentDidMount(){
    const{getScenario} = this.props;
    getScenario();
  }

  showSetup(scenarioSetup){
    if(scenarioSetup){
      return(
        <div>
          <SetupTearDown
            title= 'Setup'
            isTestCase= 'false'
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
            title= 'TearDown'
            isTestCase= 'false'
             />
          <hr />
        </div>
      );
    }else{
      return null;
    }
  }

  showTestCase(testCases){
  if(testCases.length != 0){
    let testCaseItems = [];
    for (var i = 0; i <= testCases.length-1; i++){
      testCaseItems.push(<TestCase key={i} count={i+1} />);
    }
    return <div>{testCaseItems} <hr /></div>;
  }
  else return null;
}

  render() {
    const {scenarioSetup,scenarioTearDown,testCases,getScenario,saveScenario} = this.props;
    return(
      <div className='middle-pane'>
          <Modal trigger={
            <Button size='mini' color='instagram' icon labelPosition='right'>
            <Icon name='cogs' />
            AI Mapper
            </Button>}>
          <Modal.Header>AI Mapper</Modal.Header>
          <Modal.Content>
          <ClassMapper />
          </Modal.Content>
          </Modal>
          <Scenario />
          <hr />
          {this.showSetup(scenarioSetup)}
          {this.showTestCase(testCases)}
          {this.showTearDown(scenarioTearDown)}
          <button onClick={saveScenario}>Create</button>
      </div>
    );
  }
}



export default middlePane;

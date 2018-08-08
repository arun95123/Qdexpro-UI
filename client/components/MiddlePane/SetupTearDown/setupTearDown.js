import React,{Component} from 'react'
import AccordionComponent from '../AccordionComponent'
import Step from '../Step'

class setupTearDown extends Component{
  constructor(){
    super();
    this.showStep = this.showStep.bind(this);
  }

  showStep(){
    const {scenarioSetupStep, scenarioTearDownStep,isTestCase,title, index, testCases, testCaseSetupStep} = this.props;

    if(isTestCase==='false' && title==='Setup')
    {
      let setupStepItems = [];
      for (var i = 0; i <= scenarioSetupStep.length; i++){
        setupStepItems.push(<Step key={i} count={i+1} />);
      }
      return <div>{setupStepItems}</div>;
    }
    else if(isTestCase==='false' && title==='TearDown'){
      let tearDownStepItems = [];
      for (var i = 0; i <= scenarioTearDownStep.length; i++){
        tearDownStepItems.push(<Step key={i} count={i+1} />);
      }
      return <div>{tearDownStepItems}</div>;
    }
    else if(isTestCase==='true' && title==='Setup'){
      let testCaseSetupStepItems = [];
      for (var i = 0; i <= testCases[index].testCaseSetupStep.length; i++){
        testCaseSetupStepItems.push(<Step key={i} count={i+1} />);
      }
      return <div>{testCaseSetupStepItems}</div>;
    }
    else if(isTestCase==='true' && title==='TearDown'){
      let testCaseTearDownStepItems = [];
      for (var i = 0; i <= testCases[index].testCaseTearDownStep.length; i++){
        testCaseTearDownStepItems.push(<Step key={i} count={i+1} />);
      }
      return <div>{testCaseTearDownStepItems}</div>;
    }
  }

  render(){
    const {title, isTestCase, index} = this.props;
    return(
    <AccordionComponent
       title={title}
       isTestCase = {isTestCase}
       toggleClick = {this.toggleClick}
       index={index}>
        {this.showStep()}
    </AccordionComponent>
   )
  }
}


export default setupTearDown;

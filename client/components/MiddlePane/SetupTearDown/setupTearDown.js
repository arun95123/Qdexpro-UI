import React,{Component} from 'react'
import AccordionComponent from '../AccordionComponent'
import Step from '../Step'

class setupTearDown extends Component{
  constructor(){
    super();
    this.showStep = this.showStep.bind(this);
  }

  showStep(){
    const {scenarioSetupStep, scenarioTearDownStep,isTestCase,title} = this.props;

    if(isTestCase==='false' && title==='Setup')
    {
      let setupStepItems = [];
      for (var i = 0; i <= scenarioSetupStep.length; i++){
        setupStepItems.push(<Step key={i} count={i+1} />);
      }
      return <div>{setupStepItems}</div>;
    }
    else if(isTestCase==='false' && title==='Tear Down'){
      let tearDownStepItems = [];
      for (var i = 0; i <= scenarioTearDownStep.length; i++){
        tearDownStepItems.push(<Step key={i} count={i+1} />);
      }
      return <div>{tearDownStepItems}</div>;
    }
    else return null
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

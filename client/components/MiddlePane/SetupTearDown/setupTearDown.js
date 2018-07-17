import React,{Component} from 'react'
import AccordionComponent from '../AccordionComponent'
import Step from '../Step'

class setupTearDown extends Component{
  constructor(){
    super();
    this.state= {expanded: false}
    this.showStep = this.showStep.bind(this);
    this.toggleClick = this.toggleClick.bind(this);
  }

  showStep(){
    const {scenarioSetupStep, scenarioTearDownStep,isTestCase,title} = this.props;
    if(!isTestCase && title==='Setup')
    {
    let setupStepItems = [];
    for (var i = 0; i <= scenarioSetupStep.length; i++) {
      setupStepItems.push(<Step key={i} count={i+1} />);
    }
    return <div>{setupStepItems}</div>;
  }
  else if(!isTestCase && title==='Tear Down'){
    let tearDownStepItems = [];
    for (var i = 0; i <= scenarioTearDownStep.length; i++) {
      tearDownStepItems.push(<Step key={i} count={i+1} />);
    }
    return <div>{tearDownStepItems}</div>;
  }
  else return null
  }

  toggleClick(){
    this.setState({expanded: !this.state.expanded});
  }

  render(){
    const {title, isTestCase, index} = this.props;
    return(
    <AccordionComponent
       title={title}
       isTestCase = {isTestCase}
       toggleClick = {this.toggleClick}
       expanded = {this.state.expanded}
       index={index}>
        {this.showStep()}
    </AccordionComponent>
   )
  }
}


export default setupTearDown;

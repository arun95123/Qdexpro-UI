import React,{Component} from 'react'
import AccordionComponent from '../AccordionComponent'
import Step from '../Step'

class setupTearDown extends Component{
  constructor(){
    super();
    this.state= {expanded: false,step : 1};
    this.addStep = this.addStep.bind(this);
    this.showStep = this.showStep.bind(this);
    this.toggleClick = this.toggleClick.bind(this);
  }

  addStep(){
    this.setState({expanded: true});
    var arr = this.state.step;
    this.setState({step : this.state.step + 1});
  }

  showStep(){
    console.log(this.state.step)
    let stepItems = [];
    for (var i = 1; i <= this.state.step; i++) {
      stepItems.push(<Step key={i} count={i} />);
    }
    return <div>{stepItems}</div>;
  }

  toggleClick(){
    this.setState({expanded: !this.state.expanded});
  }

  render(){
    const {title, isTestCase} = this.props;
    return(
    <AccordionComponent title={title} isTestCase = {isTestCase} stepClick = {this.addStep} toggleClick = {this.toggleClick} expanded = {this.state.expanded}>
        {this.showStep()}
    </AccordionComponent>
   )
  }
}


export default setupTearDown;

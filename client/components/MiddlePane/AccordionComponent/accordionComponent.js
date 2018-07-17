import React,{Component} from 'react'
import AccordionBlock from '../AccordionBlock'
import './accordionComponent.Style.scss'

class accordionComponent extends Component{
  constructor(){
    super();
    this.state= {expanded: false};
    this.getImage = this.getImage.bind(this);
    this.stepAdd=this.stepAdd.bind(this);
    this.toggleClick = this.toggleClick.bind(this);
  }

  getImage(expanded){
    return expanded ? 'caret down icon' : 'caret right icon';
  }

  stepAdd(){
    const{addStep,isTestCase, title}=this.props;
    this.setState({expanded : true});
    addStep(isTestCase, title);
  }

  toggleClick(){
    this.setState({expanded: !this.state.expanded});
  }

  render(){
    const {title, children, isTestCase, stepClick, index, addStep} = this.props;
    return(
      <div className='accordion-component'>
        <div className='accordion-component--header'>
          <i className={this.getImage(this.state.expanded)} onClick={this.toggleclick}/>
          {title}
          <p className='accordion-component--plus' onClick={this.stepAdd}><i className="plus circle icon" /></p>
        </div>
        <AccordionBlock
          expanded= {this.state.expanded}
          children= {children}
          isTestCase= {isTestCase}
          title= {title}
          index= {index}
        />
      </div>
    );
  }
}


export default accordionComponent;

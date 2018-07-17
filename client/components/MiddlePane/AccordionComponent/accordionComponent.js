import React,{Component} from 'react'
import AccordionBlock from '../AccordionBlock'
import './accordionComponent.Style.scss'

class accordionComponent extends Component{
  constructor(){
    super();
    this.state= {expanded: false};
    this.getImage = this.getImage.bind(this);
    this.stepAdd=this.stepAdd.bind(this);
  }

  getImage(expanded){
    return expanded ? 'caret down icon' : 'caret right icon';
  }
  stepAdd(){
    const{addStep,isTestCase, title}=this.props;
    addStep(isTestCase, title);
  }
  render(){
    const {title, children, isTestCase, stepClick, toggleClick, expanded, index, addStep} = this.props;
    return(
      <div className='accordion-component'>
        <div className='accordion-component--header'>
          <i className={this.getImage(expanded)} onClick={toggleClick}/>
          {title}
          <p className='accordion-component--plus' onClick={this.stepAdd}><i className="plus circle icon" /></p>
        </div>
        <AccordionBlock
          expanded= {expanded}
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

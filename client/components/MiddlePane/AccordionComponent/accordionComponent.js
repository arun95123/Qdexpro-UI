import React,{Component} from 'react'
import AccordionBlock from '../AccordionBlock'
import './accordionComponent.Style.scss'

class accordionComponent extends Component{
  constructor(){
    super();
    this.state= {expanded: false};
    this.getImage = this.getImage.bind(this);
  }

  getImage(expanded){
    return expanded ? 'caret down icon' : 'caret right icon';
  }

  render(){
    const {title, children, isTestCase, stepClick, toggleClick, expanded} = this.props;
    return(
      <div className='accordion-component'>
        <div className='accordion-component--header'>
          <i className={this.getImage(expanded)} onClick={toggleClick}/>
          {title}
          <p className='accordion-component--plus' onClick={stepClick}><i className="plus circle icon" /></p>
        </div>
        <AccordionBlock
          expanded= {expanded}
          children={children}
          isTestCase={isTestCase}
          title={title}
        />
      </div>
    );
  }
}


export default accordionComponent;

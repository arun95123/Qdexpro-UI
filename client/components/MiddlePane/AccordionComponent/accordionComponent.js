import React,{Component} from 'react'
import AccordionBlock from '../AccordionBlock'
import './accordionComponent.Style.scss'

class accordionComponent extends Component{
  constructor(){
    super();
    this.state= {expanded: false};
    this.getImage = this.getImage.bind(this);
    this.toggleClick = this.toggleClick.bind(this);
  }

  getImage(expanded){
    return expanded ? 'caret down icon' : 'caret right icon';
  }

  toggleClick(){
    this.setState({expanded: !this.state.expanded});
  }

  render(){
    const {title, children} = this.props;
    return(
      <div className='accordion-component'>
        <div className='accordion-component--header'>
          <i className={this.getImage(this.state.expanded)} onClick={this.toggleClick}/>
          {title}
          <p className='accordion-component--plus'><i className="plus circle icon"></i></p>
        </div>

        <AccordionBlock
          expanded= {this.state.expanded}
          children={children}
        />
      </div>
    );
  }
}


export default accordionComponent;

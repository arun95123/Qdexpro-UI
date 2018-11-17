import React,{Component} from 'react'
import './step.Style.scss'
import {Modal,Icon} from 'semantic-ui-react'
import ConfigWindow from '../../ConfigWindow'

class step extends Component{
  constructor(){
    super();
    this.remove=this.remove.bind(this);
  }

remove(){
  const {isTestCase, title,index,count,removeStep}=this.props;
  removeStep(isTestCase,title,count-1,index);
}

render(){
  const {count}=this.props;
  return(
   <div className='step--content step--content--subcontent'>
     <p className='step--content--caret--right'>
       <i className="angle right icon"></i></p>
   <Modal trigger={<p className='step--content--text'>Step {count}</p>}>
   <Modal.Header>Step {count} Configuration</Modal.Header>
   <Modal.Content>
     <ConfigWindow />
   </Modal.Content>
   </Modal>
   <Icon className='step--content--trash' name="trash" color= 'red' onClick={this.remove}></Icon>
   </div>
)
 }
}
export default step;

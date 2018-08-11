import React from 'react'
import './leftWindow.Style.scss'
import { Dropdown } from 'semantic-ui-react'
import {controlOptions,identifierOptions} from './dropDownOptions'
import TextBox from './TextBox'
import Button from './Button'
import ComboBox from './ComboBox'
import CheckBox from './CheckBox'
import RadioButton from './RadioButton'
import Table from './Table'
import Frames from './Frames'
import Windows from './Windows'
import Context from './Context'

class leftWindow extends React.Component{
  constructor(props){
    super(props);
    this.state = {control: "empty"};
    this.setAction = this.setAction.bind(this);
    this.showAction = this.showAction.bind(this);
  }

  handleClick(event, data){
    console.log(data.value+' is clicked')
  }

  setAction(event, data){
    this.setState({control : data.value});
  }

  //Change to Switch
  showAction(){
    if (this.state.control == "Text Box")
    {
      return(<TextBox />)
    }
    else if(this.state.control == "Button")
    {
      return(<Button />)
    }
    else if(this.state.control == "Combo Box")
    {
      return(<ComboBox />)
    }
    else if(this.state.control == "Check Box")
    {
      return(<CheckBox />)
    }
    else if(this.state.control == "Radio Button")
    {
      return(<RadioButton />)
    }
    else if(this.state.control == "Table")
    {
      return(<Table />)
    }
    else if(this.state.control == "Frames")
    {
      return(<Frames />)
    }
    else if(this.state.control == "Windows")
    {
      return(<Windows />)
    }
    else if(this.state.control == "Context")
    {
      return(<Context />)
    }
    else return null;
  }

  getImage(expanded){
    return expanded ? 'arrow right icon' : 'arrow left icon';
  }

  setleftWindowStyle(expanded){
    return expanded ? 'left-window collapsed-width' : 'left-window expanded-width';
  }

  render() {
    const {expandTextArea,textAreaExpand} = this.props;
    return(
      <div className={this.setleftWindowStyle(textAreaExpand)}>
        <div className='left-window--form'>
          <label className='left-window--form--content'>
            Name
            <input type="text" name="name" className='left-window--form--content--textbox'/>
          </label>
          <br />
          <label className='left-window--form--content'>
            <p className='left-window--form--content--text'>Identifier-Type</p>
            <div className='left-window--form--content--dropdown'>
              <Dropdown placeholder='Select Identifier' fluid selection options={identifierOptions} onChange={this.handleClick} />
            </div>
          </label>
          <br />
          <label className='left-window--form--content'>
            Identifier
            <input type="text" name="name" className='left-window--form--content--textbox'/>
          </label>
          <br />
          <label className='left-window--form--content'>
            <p className='left-window--form--content--text'>Control-Type</p>
            <div className='left-window--form--content--dropdown'>
              <Dropdown placeholder='Select Control' fluid selection options={controlOptions} onChange={this.setAction} />
            </div>
          </label>
          <br />
          {this.showAction()}
        </div>
        <p className='left-window--arrow'>
          <i className={this.getImage(textAreaExpand)} onClick={expandTextArea}></i>
        </p>
      </div>
    )
  }
}


export default leftWindow;

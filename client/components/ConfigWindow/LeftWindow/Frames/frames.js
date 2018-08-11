import React from 'react'
import '../leftWindow.Style.scss'
import { Dropdown } from 'semantic-ui-react'
import { actionOptions,byOptions } from './frames.dropDownOptions'

class frames extends React.Component{
  constructor(){
    super();
  }

  handleClick(event,data){
    console.log(data.value+' is clicked')
  }

  render() {
    return(
      <div>
      <label className='left-window--form--content'>
        <p className='left-window--form--content--text'>Action</p>
        <div className='left-window--form--content--dropdown'>
        <Dropdown placeholder='Select Action' fluid selection options={actionOptions} onChange={this.handleClick} />
        </div>
      </label>
      <br />
      <label className='left-window--form--content'>
        <p className='left-window--form--content--text'>By</p>
        <div className='left-window--form--content--dropdown'>
        <Dropdown placeholder='Select' fluid selection options={byOptions} onChange={this.handleClick} />
        </div>
      </label>
      <br />
      <label className='left-window--form--content'>
        Value
        <input type="text" name="name" className='left-window--form--content--textbox'/>
      </label>
      </div>
    )
  }
}


export default frames;

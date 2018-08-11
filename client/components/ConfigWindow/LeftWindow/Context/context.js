import React from 'react'
import '../leftWindow.Style.scss'
import { Dropdown } from 'semantic-ui-react'
import { actionOptions,waitTypeOptions } from './context.dropDownOptions'

class context extends React.Component{
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
        Select Item
        <input type="text" placeholder='Item Text' name="name" className='left-window--form--content--textbox'/>
      </label>
      <br />
      <label className='left-window--form--content'>
        <p className='left-window--form--content--text'>Wait Type</p>
        <div className='left-window--form--content--dropdown'>
        <Dropdown placeholder='Select Wait Type' fluid selection options={waitTypeOptions} onChange={this.handleClick} />
        </div>
      </label>
      <br />
      <label className='left-window--form--content'>
        Wait Time(secs)
        <input type="text" name="name" className='left-window--form--content--textbox'/>
      </label>
      <br />
      </div>
    )
  }
}


export default context;

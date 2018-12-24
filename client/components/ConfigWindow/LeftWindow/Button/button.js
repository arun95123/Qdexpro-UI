import React from 'react'
import '../leftWindow.Style.scss'
import { Field } from 'redux-form';

const actionTypes = ['Click','Double Click'];
const waitTypes = ['Type 1', 'Type 2']

class Button extends React.Component{
  constructor(){
    super();
  }

  handleClick(event,data){
    console.log(data.value+' is clicked')
  }

  render() {
    return(
      <div>
        <div className='left-window--form--field'>
          <label>
            Action
          </label>
          <div>
            <Field className='left-window--form--field--dropdown' name="actionType" component="select">
              <option value="">Select Action Type...</option>
              {actionTypes.map(option => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </Field>
          </div>
        </div>
        <div className='left-window--form--field'>
          <label>
            Wait Type
          </label>
          <div>
            <Field className='left-window--form--field--dropdown' name="waitType" component="select">
              <option value="">Select Wait Type...</option>
              {waitTypes.map(option => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </Field>
          </div>
        </div>
        <div className='left-window--form--field'>
          <label>
            Wait Time(Secs)
          </label>
          <div>
          <Field
            className='left-window--form--field--input'
            name="waitTime"
            type="text"
            component="input"
            placeholder="Enter Wait Time"
            />
          </div>
        </div>
      </div>
    )
  }
}


export default Button;

import React from 'react'
import './leftWindow.Style.scss'
import { Dropdown } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form';
import TextBox from './TextBox'
import Button from './Button'
import ComboBox from './ComboBox'
import CheckBox from './CheckBox'
import RadioButton from './RadioButton'
import Table from './Table'
import Frames from './Frames'
import Windows from './Windows'
import Context from './Context'

const identifierOptions = ['xPath','id'];
const controlOptions = ['TextBox','Button','Combo Box','Check Box','Radio Button','Table','Frames','Windows','Context'];

class leftWindow extends React.Component{
  constructor(props){
    super(props);
    this.state = {control: "empty"};
    this.setAction = this.setAction.bind(this);
    this.showAction = this.showAction.bind(this);
    this.saveInputField = this.saveInputField.bind(this);
    this.saveDropDownField = this.saveDropDownField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    const {index,scenarioSetupStep,loadData} = this.props;
    if(scenarioSetupStep[index].stepName)
    {
      this.setState({control : scenarioSetupStep[index].controlType});
      loadData(scenarioSetupStep[index]);
    }
  }

  componentWillUnmount(){
    const {loadData} = this.props;
    loadData(null);
  }

  handleClick(event, data){
    console.log(data.value+' is clicked')
  }

  handleSubmit(values){
    const {saveStep,isTestCase,title,index} = this.props;
    saveStep(values,isTestCase,title,index)
  }


  setAction(event, data){
    this.setState({control : data});
    const {getScript} = this.props;
    getScript(data);
  }

  //Change to Switch
  showAction(){
    if (this.state.control == "TextBox")
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

  handleChange=(event)=>{
    console.log(event.target.value);
  }

  getImage(expanded){
    return expanded ? 'arrow right icon' : 'arrow left icon';
  }

  setleftWindowStyle(expanded){
    return expanded ? 'left-window collapsed-width' : 'left-window expanded-width';
  }

  saveInputField(event, data){
    const {saveStep,isTestCase,title,index} = this.props;
    saveStep(event.target.name,event.target.value,isTestCase,title,index)
  }

  saveDropDownField(event,data,name) {
    const {saveStep,isTestCase,title,index} = this.props;
    saveStep(name,data.value,isTestCase,title,index);
  }



  render() {
    const {expandTextArea,textAreaExpand,reset,pristine,handleSubmit,mappingList} = this.props;
    console.log(mappingList);
    return(
      <div className={this.setleftWindowStyle(textAreaExpand)}>
        <form className='left-window--form' onSubmit={handleSubmit}>
          <div className='left-window--form--field'>
            <label>
              Name
            </label>
            <div>
            <Field
              className='left-window--form--field--input'
              name="stepName"
              type="text"
              component="input"
              placeholder="Enter Step Name"
              />
            </div>
          </div>
          <div className='left-window--form--field'>
            <label>
              Identifier-Type
            </label>
            <div>
              <Field className='left-window--form--field--dropdown' name="identfierType" component="select">
                <option value="">Select Identifier Type...</option>
                {identifierOptions.map(idOption => (
                  <option value={idOption} key={idOption}>
                    {idOption}
                  </option>
                ))}
              </Field>
            </div>
          </div>
          <div className='left-window--form--field'>
            <label>
              Identifier
            </label>
            <div>
            <Field
              className='left-window--form--field--input'
              name="identifier"
              type="text"
              component="input"
              placeholder="Enter Identifier"
              />
            </div>
          </div>
          <div className='left-window--form--field'>
            <label>
              Control Type
            </label>
            <div>
              <Field className='left-window--form--field--dropdown' name="controlType" component="select" onChange={this.setAction}>
                <option value="">Select Control Type...</option>
                {mappingList.map(control => (
                  <option value={control} key={control}>
                    {control}
                  </option>
                ))}
              </Field>
            </div>
          </div>
          {this.showAction()}
          <div className='left-window--form--button'>
            <button type="submit" disabled={pristine}>Submit</button>
            <button type="button" disabled={pristine} onClick={reset}>
              Undo Changes
            </button>
          </div>
        </form>
        <p className='left-window--arrow'>
          <i className={this.getImage(textAreaExpand)} onClick={expandTextArea}></i>
        </p>
      </div>
    )
  }
}

leftWindow = reduxForm({
  form: 'stepConfig',
})(leftWindow);

export default leftWindow;

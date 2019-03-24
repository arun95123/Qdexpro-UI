import React from 'react'
import './scenario.Style.scss'
import { Dropdown,Icon } from 'semantic-ui-react'

class scenario extends React.Component {
  constructor(props){
    super(props);
    this.state = {editing: "true"};
    this.textId='';
    this.edit = this.edit.bind(this);
    this.createSetup = this.createSetup.bind(this);
    this.createTestCase = this.createTestCase.bind(this);
    this.createTearDown = this.createTearDown.bind(this);
    this.changeIcon = this.changeIcon.bind(this);
    this.setEndOfContenteditable = this.setEndOfContenteditable.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  componentDidUpdate(){
    if(this.state.editing === "true"){
      this.textId.focus();
      this.setEndOfContenteditable(this.textId)

    }
  }

  createSetup(){
   console.log('Setup is clicked');
  }

  createTestCase(){
     console.log('Test case is clicked')
  }

  createTearDown(){
     console.log('Tear Down is clicked')
 }

  edit(){
    const {saveScenarioName}=this.props;
    var newText = this.textId.innerHTML.replace(/&nbsp;/gi, '').replace(/<div><br><\/div>/gi, '').replace(/<p><br><\/p>/gi, '');
    if(this.state.editing === "true"){
      this.setState({editing: "false"});
      if(this.textId.innerHTML === ''){
        alert("Scenario Name Cannot Be Empty!");
        newText = 'Scenario';
      }
      this.textId.innerHTML = newText;
      saveScenarioName(newText.trim());
    }else{
      this.setState({editing: "true"});
    }
  }

  changeIcon(){
    if(this.state.editing === "true"){
      return "save icon"
    }
    return "edit icon" ;
  }

  disableSetup(){
      const {scenarioSetup} = this.props;
      return scenarioSetup ? 'disabled item' : 'item';
  }

  disableTearDown(){
      const {scenarioTearDown} = this.props;
      return scenarioTearDown ? 'disabled item' : 'item';
  }

  keyPress(event){
    if(event.charCode == 13||this.textId.innerHTML.length > 20) {
      event.preventDefault()
    }
  }

  setEndOfContenteditable(contentEditableElement){
    var range,selection;

    range = document.createRange();//Create a range (a range is a like the selection but invisible)
    range.selectNodeContents(contentEditableElement);//Select the entire contents of the element with the range
    range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
    selection = window.getSelection();//get the selection object (allows you to change selection)
    selection.removeAllRanges();//remove any selections already made
    selection.addRange(range);//make the range you have just created the visible selection
  }

  render() {
    const {showScenarioSetup,showScenarioTearDown,showScenarioTestCase,addTestCase} = this.props;

    return(
      <div className='scenario-content'>
          <p className='scenario-content--header' onKeyPress={this.keyPress} contentEditable={this.state.editing} ref={(elem) => {this.textId = elem;}}>Scenario</p>
          <p className='scenario-content--edit'>
              <i className={this.changeIcon()} onClick={this.edit} />
          </p>
          <button className='scenario-content--button'>
            <Dropdown text="Add">
              <Dropdown.Menu>
                <Dropdown.Item text="Setup" className={this.disableSetup()} key="1" onClick={showScenarioSetup}/>
                <Dropdown.Item text="TestCase" className="item" key="2" onClick={addTestCase}/>
                <Dropdown.Item text="Tear Down" className={this.disableTearDown()} key="3" onClick={showScenarioTearDown}/>
              </Dropdown.Menu>
            </Dropdown>
          </button>
      </div>
    );
  }
}


export default scenario;

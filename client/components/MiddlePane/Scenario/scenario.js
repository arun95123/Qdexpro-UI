import React from 'react'
import './scenario.Style.scss'

class scenario extends React.Component {
  constructor(props){
    super(props);
    this.state = {editing: "false"};
    this.textId='';
    this.edit = this.edit.bind(this);
    this.createSetup = this.createSetup.bind(this);
    this.createTestCase = this.createTestCase.bind(this);
    this.createTearDown = this.createTearDown.bind(this);
    this.changeIcon = this.changeIcon.bind(this);
    this.setEndOfContenteditable = this.setEndOfContenteditable.bind(this);
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
    if(this.state.editing === "true"){
      this.setState({editing: "false"});
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
    const {showScenarioSetup,showScenarioTearDown,showScenarioTestCase} = this.props;

    return(
      <div className='scenario-content'>
          <p className='scenario-content--header' contentEditable={this.state.editing} ref={(elem) => {this.textId = elem;}}>Scenario</p>
          <p className='scenario-content--edit'>
              <i className={this.changeIcon()} onClick={this.edit} />
          </p>
          <button className='scenario-content--button'>
          <div className="ui dropdown">
             Add
            <i className="dropdown icon"></i>
            <div className="menu">
                <div className="item" data-value="0" onClick={showScenarioSetup}>Setup</div>
                <div className="item" data-value="1" onClick={showScenarioTestCase}>Test Case</div>
                <div className="item" data-value="2" onClick={showScenarioTearDown}>Tear Down</div>
            </div>
          </div>
          </button>
      </div>
    );
  }
}


export default scenario;

import React from 'react'
import './testCase.Style.scss'

class testCaseAccordion extends React.Component {
  constructor(props){
    super(props);
    this.state = {editing: "false",expanded: false};
    this.textId='';
    this.edit = this.edit.bind(this);
    this.createTestSetup = this.createTestSetup.bind(this);
    this.createTestStep = this.createTestStep.bind(this);
    this.createTestTearDown = this.createTestTearDown.bind(this);
    this.changeIcon = this.changeIcon.bind(this);
    this.getImage = this.getImage.bind(this);
    this.toggleClick = this.toggleClick.bind(this);
    this.setEndOfContenteditable = this.setEndOfContenteditable.bind(this);
  }

  componentDidUpdate(){
    if(this.state.editing === "true"){
      this.textId.focus();
      this.setEndOfContenteditable(this.textId)
    }
  }

  createTestSetup(){
   console.log('Setup is clicked');
  }

  createTestStep(){
     console.log('Test Step is clicked')
  }

  createTestTearDown(){
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

  getImage(expanded){
    return expanded ? 'caret down icon' : 'caret right icon';
  }

  toggleClick(){
    this.setState({expanded: !this.state.expanded});
  }

  setEndOfContenteditable(contentEditableElement)
 {
     var range,selection;
     range = document.createRange();
     range.selectNodeContents(contentEditableElement);
     range.collapse(false);
     selection = window.getSelection();
     selection.removeAllRanges();
     selection.addRange(range);
 }

  render() {
        return(
      <div className='testCase-content'>
          <p className='testCase-content--caret'><i className={this.getImage(this.state.expanded)} onClick={this.toggleClick}/></p>
          <p className='testCase-content--header' contentEditable={this.state.editing} ref={(elem) => {this.textId = elem;}}>Test Case</p>
          <p className='testCase-content--edit'>
              <i className={this.changeIcon()} onClick={this.edit}></i></p>
          <button className='testCase-content--button'>
          <div className="ui dropdown">
             Add
            <i className="dropdown icon"></i>
            <div className="menu">
                <div className="item" data-value="0" onClick={this.createTestSetup}>Setup</div>
                <div className="item" data-value="1" onClick={this.createTestStep}>Test Case</div>
                <div className="item" data-value="2" onClick={this.createTestTearDown}>Tear Down</div>
            </div>
        </div>
          </button>
        </div>
      );
    }
  }


export default testCaseAccordion;

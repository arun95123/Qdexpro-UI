import React from 'react'
import './testCase.Style.scss'
import SetupTearDown from '../SetupTearDown'

class testCaseAccordion extends React.Component {
  constructor(props){
    super(props);
    this.state = {editing: "false",expanded: false, showTestCaseSetup: false, showTestCaseTearDown: false};
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

  showTestCaseSetup(){
    if(this.state.showTestCaseSetup){
      const {count} = this.props;
      return(
        <div className='testcase--setup-teardown'>
          <SetupTearDown index={count-1} title='Setup' isTestCase= 'true' />
          <hr/>
        </div>
      );
    }else{
      return null;
     }
  }

  showTestCaseTearDown(){
    if(this.state.showTestCaseTearDown){
      const {count} = this.props;
      return(
        <div className='testcase--setup-teardown'>
          <SetupTearDown index={count-1} title='TearDown' isTestCase= 'true'  />
          <hr/>
        </div>
      );
    }else{
      return null;
    }
  }

  createTestSetup(){
   this.setState({expanded: true, showTestCaseSetup: true});
  }

  createTestStep(){
    console.log('clicked')
  }

  createTestTearDown(){
    this.setState({expanded: true, showTestCaseTearDown: true});
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

  setEndOfContenteditable(contentEditableElement){
     var range,selection;
     range = document.createRange();
     range.selectNodeContents(contentEditableElement);
     range.collapse(false);
     selection = window.getSelection();
     selection.removeAllRanges();
     selection.addRange(range);
  }

  setHeight(expanded, elem){
    const {testCases, count} = this.props;
    elem.style.maxHeight = expanded ? elem.scrollHeight + testCases[count - 1].testCaseSetupHeight + testCases[count - 1].testCaseTearDownHeight + 'px' : '0';
  }

  disableSetup(showTestCaseSetup){
      return showTestCaseSetup ? 'disabled item' : 'item';
  }

  disableTearDown(showTestCaseTearDown){
      return showTestCaseTearDown ? 'disabled item' : 'item';
  }


  render(){
    const {key, count} = this.props;
    return(
      <div className='testcase-content'>
        <div className='testcase-content--header'>
          <p className='testcase-content--header--caret'><i className={this.getImage(this.state.expanded)} onClick={this.toggleClick}/></p>
          <p className='testcase-content--header--title' contentEditable={this.state.editing} ref={(elem) => {this.textId = elem;}}>Test Case {count}</p>
          <p className='testcase-content--header--edit'>
            <i className={this.changeIcon()} onClick={this.edit} />
          </p>
          <button className='testcase-content--header--button'>
          <div className="ui dropdown">
            Add
            <i className="dropdown icon"></i>
            <div className="menu">
              <div className={this.disableSetup(this.state.showTestCaseSetup)} data-value="0" onClick={this.createTestSetup}>Setup</div>
              <div className="item" data-value="1" onClick={this.createTestStep}>Test Step</div>
              <div className={this.disableTearDown(this.state.showTestCaseTearDown)} data-value="2" onClick={this.createTestTearDown}>Tear Down</div>
            </div>
          </div>
          </button>
        </div>
        <div className='testcase-content--body' ref={(elem) => elem ? this.setHeight(this.state.expanded, elem) : null}>
          {this.showTestCaseSetup()}
          {this.showTestCaseTearDown()}
        </div>
      </div>
    );
  }
}


export default testCaseAccordion;

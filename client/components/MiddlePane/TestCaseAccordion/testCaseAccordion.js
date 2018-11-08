import React from 'react'
import './testCase.Style.scss'
import SetupTearDown from '../SetupTearDown'
import { Dropdown,Icon } from 'semantic-ui-react'
import Step from '../Step'

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
    this.stepAdd = this.stepAdd.bind(this);
    this.removeTestCase = this.removeTestCase.bind(this);
  }

  componentDidUpdate(){
    if(this.state.editing === "true"){
      this.textId.focus();
      this.setEndOfContenteditable(this.textId)
    }
  }

  showTestCaseSetup(testcases,count){
    if(testcases[count-1].showTestCaseSetup){
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

  showTestCaseStep(testCases, count){

    if(testCases[count - 1].testCaseTestStep.length != 0){
      let stepItems = [];
      for (var i = 0; i <= testCases[count - 1].testCaseTestStep.length - 1; i++){
        stepItems.push(<Step title="Testcase" index={count-1} key={i} count={i+1} />);
      }
      return <div>{stepItems} <hr /></div>;
    }
    else return null;
  }

  showTestCaseTearDown(testcases,count){
    if(testcases[count-1].showTestCaseTearDown){
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
    const {showTestCaseSetup,count} =this.props;
    this.setState({expanded: true});
    showTestCaseSetup(count-1);
  }

  createTestStep(){
    console.log('clicked')
  }

  createTestTearDown(){
    const {showTestCaseTearDown,count} =this.props;
    this.setState({expanded: true});
    showTestCaseTearDown(count-1);
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
      const{testCases,count}=this.props;
      return testCases[count-1].showTestCaseSetup ? 'disabled item' : 'item';
  }

  disableTearDown(showTestCaseTearDown){
    const{testCases,count}=this.props;
    return testCases[count-1].showTestCaseTearDown ? 'disabled item' : 'item';
  }

  stepAdd(){
    const{count, addTestCaseStep}=this.props;
    this.setState({expanded: true});
    addTestCaseStep(count - 1);
  }

 removeTestCase(){
   const{count, removeTestCase}=this.props;
   removeTestCase(count - 1);
 }

  render(){
    const {key, count, addTestCaseStep, testCases} = this.props;
    return(
      <div className='testcase-content'>
        <div className='testcase-content--header'>
          <p className='testcase-content--header--caret'><i className={this.getImage(this.state.expanded)} onClick={this.toggleClick}/></p>
          <p className='testcase-content--header--title' contentEditable={this.state.editing} ref={(elem) => {this.textId = elem;}}>Test Case {count}</p>
          <p className='testcase-content--header--edit'>
            <i className={this.changeIcon()} onClick={this.edit} />
          </p>
          <button className='scenario-content--button'>
            <Dropdown text="Add">
              <Dropdown.Menu>
                <Dropdown.Item text="Setup" className={this.disableSetup(this.state.showTestCaseSetup)} key="1" onClick={this.createTestSetup}/>
                <Dropdown.Item text="Test Step" className="item" key="2" onClick={this.stepAdd}/>
                <Dropdown.Item text="Tear Down" className={this.disableTearDown(this.state.showTestCaseTearDown)} key="3" onClick={this.createTestTearDown}/>
              </Dropdown.Menu>
            </Dropdown>
          </button>
          <Icon name="trash" onClick={this.removeTestCase} />
        </div>
        <div className='testcase-content--body' ref={(elem) => elem ? this.setHeight(this.state.expanded, elem) : null}>
          {this.showTestCaseSetup(testCases, count)}
          {this.showTestCaseStep(testCases, count)}
          {this.showTestCaseTearDown(testCases, count)}
        </div>
      </div>
    );
  }
}


export default testCaseAccordion;

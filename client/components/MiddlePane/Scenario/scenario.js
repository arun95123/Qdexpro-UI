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
  }

  componentDidUpdate(){
    if(this.state.editing === "true"){
      this.textId.focus();
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

  render() {
    const {showScenarioSetup,showScenarioTearDown,showScenarioTestCase} = this.props;

    return(
      <div className='scenario-content'>
          <p className='scenario-content--header' contentEditable={this.state.editing} ref={(elem) => {this.textId = elem;}}>Scenario</p>
          <p className='scenario-content--edit'>
              <i className={this.changeIcon()} onClick={this.edit}></i></p>
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

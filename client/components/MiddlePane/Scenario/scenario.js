import React from 'react'
import '../middlePane.Style.scss'

const click1 =() => (
  console.log('Setup is clicked')
)

const click2 =() => (
    console.log('Test case is clicked')
)

const click3 =() => (
    console.log('Tear Down is clicked')
)


class scenario extends React.Component {
  constructor(props){
    super(props);
    this.state = {editing: "false"};
    this.textId='';
    this.edit = this.edit.bind(this);
    this.changeIcon = this.changeIcon.bind(this);
  }

  componentDidUpdate(){
    if(this.state.editing === "true"){
      this.textId.focus();
    }
 }

  edit(){
    if(this.state.editing === "true"){
      this.setState({editing: "fasle"});
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
    return(
      <div className='middle-pane--content'>
          <p className='middle-pane--content--text' contentEditable={this.state.editing} ref={(elem) => {this.textId = elem;}}>Scenario</p>
          <p className='middle-pane--content--edit'>
              <i className={this.changeIcon()} onClick={this.edit}></i></p>
          <button className='middle-pane--content--button'>
          <div className="ui dropdown">
             Add
            <i className="dropdown icon"></i>
            <div className="menu">
                <div className="item" data-value="0" onClick={click1}>Setup</div>
                <div className="item" data-value="1" onClick={click2}>Test Case</div>
                <div className="item" data-value="2" onClick={click3}>Tear Down</div>
            </div>
        </div>
          </button>
        </div>
      );
    }
  }


export default scenario;

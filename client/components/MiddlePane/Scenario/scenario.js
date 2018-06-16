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
    this.state = {editing: false};
    this.edit = this.edit.bind(this);
    this.changeIcon = this.changeIcon.bind(this);
  }

  edit(){
    this.setState({editing: !this.state.editing});
  }

  changeIcon(){
    return (this.state.editing) ? "save icon" : "edit icon" ;
  }

  render() {
    return(
      <div className='middle-pane--content'>
          <p className='middle-pane--content--text' contenteditable="true">Scenario</p>
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

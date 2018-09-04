import React from 'react';
import MainItem from '../MainItem';
import SubItem from '../SubItem'

class Scenario extends React.Component {
  constructor(props){
    super(props);
    this.state = {clicked: false};
    this.mainItemOnClick = this.mainItemOnClick.bind(this);
    this.renderSubItems = this.renderSubItems.bind(this);
  }

  mainItemOnClick(){
    this.setState({clicked: !this.state.clicked});}

  renderSubItems(){
    if(this.state.clicked){
      return(
        <div>
          <SubItem label={'Add Scenario'} />
          <SubItem label={'Scenario 1'} />
        </div>
      );
    } else{
      null
    }
  }

  render() {
    return (
      <div>
          <MainItem label={'Scenario'} onClick={this.mainItemOnClick} status={this.state.clicked}/>
          {this.renderSubItems()}
      </div>
    );
  }
}

export default Scenario;

import React,{Component} from 'react'
import MainItem from '../MainItem'
import SubItem from '../SubItem'

const mainItemOnClick = () => {
  return (
    <SubItem label={'ITEM'}>
  );
}

class Scenario extends Component{
  render() {
    return(
      <div>
        <MainItem label={'SCENARIO'}/>
      </div>
    );
  };
}

export default Scenario;

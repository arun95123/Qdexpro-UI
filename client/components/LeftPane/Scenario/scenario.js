import React,{Component} from 'react';
import MainItem from '../MainItem';
import SubItem from '../SubItem'

const mainItemOnClick = () => {
  console.log('This is Clicked');
return(
    <SubItem label={'Add Scenario'}/>
)
};

const scenario = () => (
    <div>
        <MainItem label={'SCENARIO'} onClick={mainItemOnClick}/>
    </div>
);



export default scenario;

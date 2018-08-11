import React from 'react'
import './configWindow.Style.scss'
import LeftWindow from './LeftWindow'
import RightWindow from './RightWindow'

class configWindow extends React.Component {
  constructor(props){
  super(props);
  }

  showLeftWindow(expanded){
    if(expanded){
      return null
    }
    else return
  }

  render(){
    return(
      <div className="configWindow">
        <LeftWindow />
        <RightWindow />
      </div>
    );
  }
}
export default configWindow;

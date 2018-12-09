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
    const {isTestCase,title,index} = this.props;
    return(
      <div className="configWindow">
        <LeftWindow isTestCase={isTestCase} title={title} index={index} />
        <RightWindow />
      </div>
    );
  }
}
export default configWindow;

import React from 'react'
import './rightWindow.Style.scss'
import { Form, TextArea } from 'semantic-ui-react'

class rightWindow extends React.Component{
  constructor(props){
    super(props);
    this.showTextArea = this.showTextArea.bind(this);
  }

  showTextArea(expanded){
    if(!expanded)
    {
      return <TextArea placeholder='Edit Code Here!' rows='670px' cols='78' />
    }
    else {
      return <TextArea placeholder='Edit Code Here!' rows='670px' cols='125' />
    }
  }


render(){
  const {textAreaExpand} = this.props;
  return(
    <div className='rightWindow'>
    {this.showTextArea(textAreaExpand)}
    </div>
  )
}
}
export default rightWindow

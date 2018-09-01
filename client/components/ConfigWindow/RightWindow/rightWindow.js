import React from 'react'
import './rightWindow.Style.scss'
import { Form, TextArea } from 'semantic-ui-react'
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/github';

class rightWindow extends React.Component{
  constructor(props){
    super(props);
    this.showTextArea = this.showTextArea.bind(this);
  }

  onChange(newValue) {
    console.log('change',newValue);
  }

  windowWidth(expanded){
    return expanded ? "900px" : "570px";
  }


  showTextArea(expanded){
      return (
        <AceEditor
          mode="java"
          theme="github"
          onChange={this.onChange}
          name="codeEditor"
          editorProps={{$blockScrolling: true}}
          height="auto"
          width={this.windowWidth(expanded)}
        />
      );
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

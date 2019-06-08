import React from 'react'
import './rightWindow.Style.scss'
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
    return expanded ? "rightWindow--expanded" : "rightWindow--collapsed";
  }


  showTextArea(){
    const {editorCode} = this.props;
      return (
        <AceEditor
          mode="java"
          theme="github"
          value={editorCode}
          onChange={this.onChange}
          editorProps={{$blockScrolling: true}}
          height="600px"
          width="100%"
        />
      );
    }


  render(){
    const {textAreaExpand} = this.props;
    return(
      <div className={this.windowWidth(textAreaExpand)}>
      {this.showTextArea()}
      </div>
    )
  }
}
export default rightWindow

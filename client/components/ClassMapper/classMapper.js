import React,{Component} from 'react'
import './classMapper.Style.scss'
import { Input,Icon,Table,Dropdown,Button } from 'semantic-ui-react'

const classOptions = [
  {
    text: 'TextBoxMain',
    value: 'TextBoxMain'},
  {
    text: 'ButtonMain',
    value: 'buttonMain'},
  {
    text: 'TableMain',
    value: 'TableMain'}
]

class classMapper extends React.Component{
  constructor(props){
    super(props);
    this.state = {control: 1,
      controlType : [],
      classOptions:[
      {
        text: 'TextBoxMain',
        value: 'TextBoxMain',
        index:'null'},
      {
        text: 'ButtonMain',
        value: 'buttonMain',
        index:'null'},
      {
        text: 'TableMain',
        value: 'TableMain',
        index:'null'}
      ]};
    this.handleClick = this.handleClick.bind(this);
    this.showControl = this.showControl.bind(this);
    this.changeIndex = this.changeIndex.bind(this);
    this.showDropDownText = this.showDropDownText.bind(this);
    this.removeMapping = this.removeMapping.bind(this);
    this.showInput = this.showInput.bind(this);
  }

  handleClick(event, data){
    this.setState({control:this.state.control+1});
  }

  changeIndex(e,data,key){
    const {saveMapping} = this.props;
    let field = 'dropDown';
    let temp = this.state.classOptions;
    //setting index for the current element and clearing it for the previous element
    for (let i=0;i<this.state.classOptions.length;i++){
      if(temp[i].index===key)
      {
        temp[i].index = 'null';
      }
    }
    for (let i=0;i<this.state.classOptions.length;i++){
      if(temp[i].value===data.value)
      {
        temp[i].index = key;
      }
    }
    this.setState({classOptions:temp});
    saveMapping(field,key,data.value);
  }

  showDropDownText(key){
    let temp = this.state.classOptions;
    for (let i=0;i<this.state.classOptions.length;i++){
      if(temp[i].index===key)
      {
        return temp[i].text;
      }
      else if (i===this.state.classOptions.length-1){
        return 'Select'
      }
    }
  }

  saveInput(e,data,index){
    let temp = this.state.controlType;
    temp[index]=data.value;
    this.setState({controlType:temp});
    const {saveMapping} = this.props;
    let field = 'input';
    saveMapping(field,index,data.value);
  }

  removeMapping(i){
    this.setState({control:this.state.control-1});
    //remove Input Field
    let tempType = this.state.controlType;
    let tempOptions= this.state.classOptions;
    tempType.splice(i,1);
    console.log(this.state.controlType);
    this.setState({controlType:tempType});
    //remove Dropdown Field
    for (let j=0;i<this.state.classOptions.length;j++){
      if(tempOptions[j].index === i)
      {
        tempOptions[j].index = 'null';
      }
      else if(tempOptions[j].index>i)
      {
        tempOptions[j].index = tempOptions[j].index-1;
      }
    }
    this.setState({classOptions:tempOptions})
  }

  showInput(i){
    if(this.state.controlType[i]){
      return <Input placeholder='Enter Control Type' value={this.state.controlType[i]} onChange={(e,data)=>this.saveInput(e,data,i)}/>
    }
    else return <Input placeholder='Enter Control Type' value='' onChange={(e,data)=>this.saveInput(e,data,i)}/>;
  }

  showControl(){
    let controlItems = [];
    for (let i = 0; i < this.state.control; i++){
      controlItems.push(
        <div className='classMapper--content'>
        {this.showInput(i)}
          <div className='classMapper--dropdown'>
            <Dropdown
              text = {this.showDropDownText(i)}
              placeholder='Select Class'
              selection
              options={this.state.classOptions}
              onChange={(e,data)=>this.changeIndex(e,data,i)}/></div>
              <Icon name="remove circle" size='large' onClick={()=>this.removeMapping(i)}/>
        </div>
      );
    }
    return <div>{controlItems}</div>;
  }

  render() {
    return(
      <div className='classMapper'>
        {this.showControl()}
        <div className='classMapper--button'>
        <Button onClick={this.handleClick} color='facebook'>Add Control</Button>
        <Button color='green'>Save</Button>
        </div>
      </div>
    )
  }
}

export default classMapper

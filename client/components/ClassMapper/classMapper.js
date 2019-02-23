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

class ClassMapper extends React.Component{
  constructor(props){
    super(props);
    this.state = {control: 1,
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
  }

  handleClick(event, data){
    this.setState({control:this.state.control+1});
  }

  changeIndex(e,data,key){
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

  showControl(){
    let controlItems = [];
    for (let i = 0; i < this.state.control; i++){
      controlItems.push(
        <div className='classMapper--content'>
          <Input placeholder='Enter Control Type' />
          <div className='classMapper--dropdown'>
            <Dropdown
              text = {this.showDropDownText(i)}
              placeholder='Select Class'
              selection
              options={this.state.classOptions}
              onChange={(e,data)=>this.changeIndex(e,data,i)}/></div>
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

export default ClassMapper

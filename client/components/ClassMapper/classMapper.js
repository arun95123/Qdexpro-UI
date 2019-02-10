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
    this.state = {control: 1};
    this.handleClick = this.handleClick.bind(this);
    this.showControl = this.showControl.bind(this);
  }

  handleClick(event, data){
    this.setState({control:this.state.control+1});
  }

  showControl(){
    let controlItems = [];
    for (var i = 0; i < this.state.control; i++){
      controlItems.push(
        <div className='classMapper--content'>
          <Input placeholder='Enter Control Type' />
          <div className='classMapper--dropdown'><Dropdown placeholder='Select Class' fluid selection options={classOptions} /></div>
        </div>
      );
    }
    return <div>{controlItems}</div>;
  }

  render() {
    console.log(this.state.control)
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

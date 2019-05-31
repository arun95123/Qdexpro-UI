import React, { Component } from "react";
import "./classMapper.Style.scss";
import {} from "semantic-ui-react";
import {
  Input,
  Icon,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";

class classMapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      control: 0,
      classOption: [],
      controlType: []
    };
    this.toggle = this.toggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.showControl = this.showControl.bind(this);
    this.changeIndex = this.changeIndex.bind(this);
    this.showDropDownText = this.showDropDownText.bind(this);
    this.removeMapping = this.removeMapping.bind(this);
    this.showInput = this.showInput.bind(this);
    this.showSave = this.showSave.bind(this);
    this.saveText1 = this.saveText1.bind(this);
  }

  componentDidMount() {
    const ctrlType = this.props.controlType.slice();
    let clsOpt = this.props.classOptions.slice();
    this.setState({
      controlType: ctrlType,
      control: this.props.control
    });
    for (let i = 0; i < clsOpt.length; i++) {
      clsOpt[i] = { ...this.props.classOptions[i] };
    }
    this.setState({ classOption: clsOpt });
  }

  handleClick(event, data) {
    this.setState({ control: this.state.control + 1 });
  }

  changeIndex(e, key) {
    let temp = this.state.classOption;
    //setting index for the current element and clearing it for the previous element
    for (let i = 0; i < this.state.classOption.length; i++) {
      if (temp[i].index === key) {
        temp[i].index = "null";
      }
    }
    for (let i = 0; i < this.state.classOption.length; i++) {
      if (temp[i].value === e.target.value) {
        temp[i].index = key;
      }
    }
    console.log(temp);
    this.setState({ classOption: temp });
  }

  // showDropDownText(key) {
  //   let temp = this.state.classOption;
  //   for (let i = 0; i < this.state.classOption.length; i++) {
  //     if (temp[i].index === key) {
  //       return temp[i].text;
  //     } else if (i === this.state.classOption.length - 1) {
  //       return "Select Class";
  //     }
  //   }
  // }

  saveInput(e, index) {
    let temp = this.state.controlType;
    temp[index] = e.target.value;
    this.setState({ controlType: temp });
    // const { saveMapping } = this.props;
    // let field = "input";
    // saveMapping(field, index, data.value);
  }

  removeMapping(i) {
    this.setState({ control: this.state.control - 1 });
    //remove Input Field
    let tempType = this.state.controlType;
    let tempOptions = this.state.classOption;
    tempType.splice(i, 1);
    this.setState({ controlType: tempType });
    //remove Dropdown Field

    for (let j = 0; j < tempOptions.length; j++) {
      if (tempOptions[j].index === i) {
        tempOptions[j].index = "null";
      } else if (tempOptions[j].index > i) {
        tempOptions[j].index = tempOptions[j].index - 1;
      }
    }
    this.setState({ classOption: tempOptions });
  }

  showInput(i) {
    if (this.state.controlType[i]) {
      return (
        <div className="">
          <Input
            type="text"
            value={this.state.controlType[i]}
            placeholder="Enter Control Type"
            onChange={e => this.saveInput(e, i)}
          />
        </div>
      );
    } else
      return (
        <div className="">
          <Input
            type="text"
            value=""
            placeholder="Enter Control Type"
            onChange={e => this.saveInput(e, i)}
          />
        </div>
      );
  }

  populateDropdown = index => {
    let drdn = [];
    drdn.push(<option />);
    for (let i = 0; i < this.state.classOption.length; i++) {
      if (this.state.classOption[i].index == index) {
        drdn.push(
          <option selected key={i}>
            {this.state.classOption[i].value}
          </option>
        );
      } else {
        drdn.push(<option key={i}>{this.state.classOption[i].value}</option>);
      }
    }
    return drdn;
  };

  showControl() {
    let controlItems = [];
    for (let i = 0; i < this.state.control; i++) {
      controlItems.push(
        <div className="d-flex justify-content-around row m-2" key={i}>
          {this.showInput(i)}
          <div>
            <select
              className="form-control"
              id="sel1"
              onChange={e => this.changeIndex(e, i)}
            >
              {this.populateDropdown(i)}
            </select>
          </div>
          <Button className="" onClick={() => this.removeMapping(i)}>
            &ndash;
          </Button>
        </div>
      );
    }
    return <div>{controlItems}</div>;
  }

  saveText1 = () => {
    const { saveText } = this.props;
    saveText(
      this.state.control,
      this.state.controlType,
      this.state.classOption
    );
  };

  showSave = () => {
    if (this.state.control >= this.state.classOption.length) {
      return (
        <Button className="m-1" onClick={this.handleClick} disabled>
          Add Control
        </Button>
      );
    } else {
      return (
        <Button className="m-1" onClick={this.handleClick}>
          Add Control
        </Button>
      );
    }
  };

  render() {
    return (
      <div>
        {this.showControl()}
        <div className="d-flex justify-content-center">
          {this.showSave()}
          <Button className="m-1" onClick={this.saveText1}>
            Save
          </Button>
        </div>
      </div>
    );
  }
}

export default classMapper;

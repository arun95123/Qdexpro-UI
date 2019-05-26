import React, { Component } from "react";
import "./classMapper.Style.scss";
import { Input, Icon, Table, Dropdown, Button } from "semantic-ui-react";

class classMapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      control: 0,
      classOption: [],
      controlType: []
    };
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

  changeIndex(e, data, key) {
    // const { saveMapping } = this.props;
    // let field = "dropDown";
    let temp = this.state.classOption;
    //setting index for the current element and clearing it for the previous element
    for (let i = 0; i < this.state.classOption.length; i++) {
      if (temp[i].index === key) {
        temp[i].index = "null";
      }
    }
    for (let i = 0; i < this.state.classOption.length; i++) {
      if (temp[i].value === data.value) {
        temp[i].index = key;
      }
    }
    this.setState({ classOption: temp });
    // saveMapping(field, key, data.value);
  }

  showDropDownText(key) {
    let temp = this.state.classOption;
    for (let i = 0; i < this.state.classOption.length; i++) {
      if (temp[i].index === key) {
        return temp[i].text;
      } else if (i === this.state.classOption.length - 1) {
        return "";
      }
    }
  }

  saveInput(e, data, index) {
    let temp = this.state.controlType;
    temp[index] = data.value;
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
        <Input
          placeholder="Enter Control Type"
          value={this.state.controlType[i]}
          onChange={(e, data) => this.saveInput(e, data, i)}
        />
      );
    } else
      return (
        <Input
          placeholder="Enter Control Type"
          value=""
          onChange={(e, data) => this.saveInput(e, data, i)}
        />
      );
  }

  showControl() {
    let controlItems = [];
    for (let i = 0; i < this.state.control; i++) {
      controlItems.push(
        <div className="classMapper--content" key={i}>
          {this.showInput(i)}
          <div className="classMapper--dropdown">
            <Dropdown
              value={this.showDropDownText(i)}
              selection
              placeholder="Select class"
              options={this.state.classOption}
              onChange={(e, data) => this.changeIndex(e, data, i)}
            />
          </div>
          <Icon
            name="remove circle"
            size="large"
            onClick={() => this.removeMapping(i)}
          />
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
        <Button onClick={this.handleClick} disabled color="facebook">
          Add Control
        </Button>
      );
    } else {
      return (
        <Button onClick={this.handleClick} color="facebook">
          Add Control
        </Button>
      );
    }
  };

  render() {
    return (
      <div className="classMapper">
        {this.showControl()}
        <div className="classMapper--button">
          {this.showSave()}
          <Button color="green" onClick={this.saveText1}>
            Save
          </Button>
        </div>
      </div>
    );
  }
}

export default classMapper;

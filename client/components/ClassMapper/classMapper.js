import React, { Component } from "react";
import {} from "semantic-ui-react";
import {
  Input,
  Icon,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Alert
} from "reactstrap";

class classMapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      control: 0,
      classOption: [],
      controlType: [],
      errorMsg: false,
      succMsg: false,
      dismissMsgErr: true,
      dismissMsgSucc: true,
      saveEnable: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.showControl = this.showControl.bind(this);
    this.changeIndex = this.changeIndex.bind(this);
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
    this.setState({ saveEnable: true });
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
    this.setState({ classOption: temp });
    this.setState({ saveEnable: true });
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
    this.setState({ saveEnable: true });
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
    this.setState({ saveEnable: true });
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
    drdn.push(<option key="initial" />);
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
    let checkString = true;
    let checkDropDn = true;
    let counterDn = 0;
    let counterStr = 0;
    //Counting valid control string
    for (let x = 0; x < this.state.controlType.length; x++) {
      if (this.state.controlType[x] != "") {
        counterStr += 1;
      }
    }
    //Counting valid dropdown
    for (let x = 0; x < this.state.classOption.length; x++) {
      if (this.state.classOption[x].index != "null") {
        counterDn += 1;
      }
    }
    //Checking valid entries with total controls
    if (this.state.control != counterDn) {
      checkDropDn = false;
    }
    if (this.state.control != counterStr) {
      checkString = false;
    }
    //If both the checks are passed, save to redux
    if (checkString == true && checkDropDn == true) {
      this.setState({ succMsg: true });
      this.setState({ errorMsg: false });
      this.setState({ dismissMsgSucc: true });
      this.setState({ saveEnable: false });
      saveText(
        this.state.control,
        this.state.controlType,
        this.state.classOption
      );
    } else {
      this.setState({ errorMsg: true });
      this.setState({ succMsg: false });
      this.setState({ dismissMsgErr: true });
    }
  };

  displayError = () => {
    if (this.state.errorMsg && this.state.dismissMsgErr) {
      return (
        // <Message
        //   onDismiss={this.handleDismissErr}
        //   header="Error!"
        //   content="Changes cannot be saved with empty values!"
        //   error
        // />
        <Alert
          color="warning"
          isOpen={this.state.dismissMsgErr}
          toggle={this.handleDismissErr}
        >
          Changes cannot be saved with empty values!
        </Alert>
      );
    }
  };

  handleDismissErr = () => {
    this.setState({
      dismissMsgErr: false
    });
  };

  displaySuccess = () => {
    if (this.state.succMsg && this.state.dismissMsgSucc) {
      return (
        // <Message
        //   onDismiss={this.handleDismissSucc}
        //   header="Success!"
        //   content="Changes saved successfully"
        //   positive
        // />
        <Alert
          color="success"
          isOpen={this.state.dismissMsgSucc}
          toggle={this.handleDismissSucc}
        >
          Changes saved successfully
        </Alert>
      );
    }
  };

  handleDismissSucc = () => {
    this.setState({
      dismissMsgSucc: false
    });
  };

  showAdd = () => {
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

  showSave = () => {
    if (this.state.saveEnable) {
      return (
        <Button className="m-1" onClick={this.saveText1}>
          Save
        </Button>
      );
    } else {
      return (
        <Button className="m-1" onClick={this.saveText1} disabled>
          Save
        </Button>
      );
    }
  };

  render() {
    return (
      <div>
        {this.displayError()}
        {this.displaySuccess()}
        {this.showControl()}
        <div className="d-flex justify-content-center">
          {this.showAdd()}
          {this.showSave()}
        </div>
      </div>
    );
  }
}

export default classMapper;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faEdit } from "@fortawesome/free-regular-svg-icons";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  InputGroupButtonDropdown,
  Button
} from "reactstrap";
import "./scenario.Style.scss";

class scenario extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editing: "true", dropdownOpen: false };
    this.textId = "";
    this.edit = this.edit.bind(this);
    this.createSetup = this.createSetup.bind(this);
    this.createTestCase = this.createTestCase.bind(this);
    this.createTearDown = this.createTearDown.bind(this);
    this.changeIcon = this.changeIcon.bind(this);
    this.setEndOfContenteditable = this.setEndOfContenteditable.bind(this);
    this.keyPress = this.keyPress.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentDidUpdate() {
    if (this.state.editing === "true") {
      this.textId.focus();
      this.setEndOfContenteditable(this.textId);
    }
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  createSetup() {
    console.log("Setup is clicked");
  }

  createTestCase() {
    console.log("Test case is clicked");
  }

  createTearDown() {
    console.log("Tear Down is clicked");
  }

  edit() {
    const { saveScenarioName } = this.props;
    var newText = this.textId.innerHTML
      .replace(/&nbsp;/gi, "")
      .replace(/<div><br><\/div>/gi, "")
      .replace(/<p><br><\/p>/gi, "");
    if (this.state.editing === "true") {
      this.setState({ editing: "false" });
      if (this.textId.innerHTML === "") {
        alert("Scenario Name Cannot Be Empty!");
        newText = "Scenario";
      }
      this.textId.innerHTML = newText;
      saveScenarioName(newText.trim());
    } else {
      this.setState({ editing: "true" });
    }
  }

  changeIcon() {
    if (this.state.editing === "true") {
      return faSave;
    }
    return faEdit;
  }

  disableSetup() {
    const { scenarioSetup, showScenarioSetup } = this.props;
    if (scenarioSetup) {
      return (
        <DropdownItem disabled onClick={showScenarioSetup}>
          Setup
        </DropdownItem>
      );
    }
    return <DropdownItem onClick={showScenarioSetup}>Setup</DropdownItem>;
  }

  disableTearDown() {
    const { scenarioTearDown, showScenarioTearDown } = this.props;
    if (scenarioTearDown) {
      return (
        <DropdownItem disabled onClick={showScenarioTearDown}>
          TearDown
        </DropdownItem>
      );
    }
    return <DropdownItem onClick={showScenarioTearDown}>TearDown</DropdownItem>;
  }

  keyPress(event) {
    if (event.charCode == 13 || this.textId.innerHTML.length > 20) {
      event.preventDefault();
    }
  }

  setEndOfContenteditable(contentEditableElement) {
    var range, selection;

    range = document.createRange(); //Create a range (a range is a like the selection but invisible)
    range.selectNodeContents(contentEditableElement); //Select the entire contents of the element with the range
    range.collapse(false); //collapse the range to the end point. false means collapse to end rather than the start
    selection = window.getSelection(); //get the selection object (allows you to change selection)
    selection.removeAllRanges(); //remove any selections already made
    selection.addRange(range); //make the range you have just created the visible selection
  }

  render() {
    const {
      showScenarioSetup,
      showScenarioTearDown,
      showScenarioTestCase,
      addTestCase
    } = this.props;

    document.body.setAttribute("spellcheck", false);

    return (
      <div>
        <InputGroup className="my-4">
          <InputGroupAddon addonType="prepend" className="col myText myGrp">
            <p
              className="myText"
              onKeyPress={this.keyPress}
              contentEditable={this.state.editing}
              ref={elem => {
                this.textId = elem;
              }}
            >
              Scenario
            </p>
          </InputGroupAddon>

          <Button outline className="myButton myGrp" onClick={this.edit}>
            <FontAwesomeIcon
              className="myIcon"
              transform="grow-12"
              icon={this.changeIcon()}
            />
          </Button>

          <InputGroupAddon className="myGrp" addonType="prepend">
            <Dropdown
              outline
              isOpen={this.state.dropdownOpen}
              toggle={this.toggle}
            >
              <DropdownToggle caret>Add</DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Select an Option</DropdownItem>
                {this.disableSetup()}
                <DropdownItem onClick={addTestCase}>TestCase</DropdownItem>
                {this.disableTearDown()}
              </DropdownMenu>
            </Dropdown>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  }
}

export default scenario;

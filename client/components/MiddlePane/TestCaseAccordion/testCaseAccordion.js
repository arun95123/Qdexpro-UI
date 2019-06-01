import React from "react";
import "./testCase.Style.scss";
import SetupTearDown from "../SetupTearDown";
import Step from "../Step";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  Button
} from "reactstrap";
import {
  faTrashAlt,
  faAngleRight,
  faAngleDown
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faEdit } from "@fortawesome/free-regular-svg-icons";

class testCaseAccordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editing: "false", expanded: false, dropdownOpen: false };
    this.textId = "";
    this.edit = this.edit.bind(this);
    this.createTestSetup = this.createTestSetup.bind(this);
    this.createTestTearDown = this.createTestTearDown.bind(this);
    this.changeIcon = this.changeIcon.bind(this);
    this.getImage = this.getImage.bind(this);
    this.toggleClick = this.toggleClick.bind(this);
    this.setEndOfContenteditable = this.setEndOfContenteditable.bind(this);
    this.stepAdd = this.stepAdd.bind(this);
    this.removeTestCase = this.removeTestCase.bind(this);
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

  showTestCaseSetup() {
    const { count, testCases } = this.props;
    if (testCases[count - 1].showTestCaseSetup) {
      return (
        <div className="testcase--setup-teardown">
          <SetupTearDown index={count - 1} title="Setup" isTestCase="true" />
          <hr />
        </div>
      );
    } else {
      return null;
    }
  }

  showTestCaseStep(testCases, count) {
    if (testCases[count - 1].testCaseTestStep.length != 0) {
      let stepItems = [];
      for (
        var i = 0;
        i <= testCases[count - 1].testCaseTestStep.length - 1;
        i++
      ) {
        stepItems.push(
          <Step title="Testcase" index={count - 1} key={i} count={i + 1} />
        );
      }
      return (
        <div>
          {stepItems} <hr />
        </div>
      );
    } else return null;
  }

  showTestCaseTearDown() {
    const { count, testCases } = this.props;
    if (testCases[count - 1].showTestCaseTearDown) {
      return (
        <div className="testcase--setup-teardown">
          <SetupTearDown index={count - 1} title="TearDown" isTestCase="true" />
          <hr />
        </div>
      );
    } else {
      return null;
    }
  }

  createTestSetup() {
    this.setState({ expanded: true });
    var title = "Setup";
    const { count, showTestCaseSetupTearDown } = this.props;
    showTestCaseSetupTearDown(title, count - 1);
  }

  createTestTearDown() {
    this.setState({ expanded: true });
    var title = "TearDown";
    const { count, showTestCaseSetupTearDown } = this.props;
    showTestCaseSetupTearDown(title, count - 1);
  }

  edit() {
    const { saveTestcaseName, count } = this.props;
    if (this.state.editing === "true") {
      this.setState({ editing: "false" });
      saveTestcaseName(this.textId.innerHTML, count - 1);
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

  getImage(expanded) {
    return expanded ? faAngleDown : faAngleRight;
  }

  toggleClick() {
    this.setState({ expanded: !this.state.expanded });
  }

  setEndOfContenteditable(contentEditableElement) {
    var range, selection;
    range = document.createRange();
    range.selectNodeContents(contentEditableElement);
    range.collapse(false);
    selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }

  setHeight(expanded, elem) {
    const { testCases, count } = this.props;
    elem.style.maxHeight = expanded
      ? elem.scrollHeight +
        testCases[count - 1].testCaseSetupHeight +
        testCases[count - 1].testCaseTearDownHeight +
        "px"
      : "0";
  }

  disableSetup() {
    const { testCases, count } = this.props;
    if (testCases[count - 1].showTestCaseSetup) {
      return (
        <DropdownItem disabled onClick={this.createTestSetup}>
          Setup
        </DropdownItem>
      );
    }
    return <DropdownItem onClick={this.createTestSetup}>Setup</DropdownItem>;
  }

  disableTearDown() {
    const { testCases, count } = this.props;
    if (testCases[count - 1].showTestCaseTearDown) {
      return (
        <DropdownItem disabled onClick={this.createTestTearDown}>
          Tear Down
        </DropdownItem>
      );
    }
    return (
      <DropdownItem onClick={this.createTestTearDown}>Tear Down</DropdownItem>
    );
  }

  stepAdd() {
    const { count, addTestCaseStep } = this.props;
    this.setState({ expanded: true });
    addTestCaseStep(count - 1);
  }

  removeTestCase() {
    const { count, removeTestCase } = this.props;
    removeTestCase(count - 1);
  }

  render() {
    const { key, count, addTestCaseStep, testCases } = this.props;
    return (
      // <div className='testcase-content'>
      //   <div className='testcase-content--header'>
      //     <p className='testcase-content--header--caret'><i className={this.getImage(this.state.expanded)} onClick={this.toggleClick}/></p>
      //     <p className='testcase-content--header--title' contentEditable={this.state.editing} ref={(elem) => {this.textId = elem;}}>Test Case {count}</p>
      //     <p className='testcase-content--header--edit'>
      //       <i className={this.changeIcon()} onClick={this.edit} />
      //     </p>
      //     <button className='scenario-content--button'>
      //       <Dropdown text="Add">
      //         <Dropdown.Menu>
      //           <Dropdown.Item text="Setup" className={this.disableSetup(this.state.showTestCaseSetup)} key="1" onClick={this.createTestSetup}/>
      //           <Dropdown.Item text="Test Step" className="item" key="2" onClick={this.stepAdd}/>
      //           <Dropdown.Item text="Tear Down" className={this.disableTearDown(this.state.showTestCaseTearDown)} key="3" onClick={this.createTestTearDown}/>
      //         </Dropdown.Menu>
      //       </Dropdown>
      //     </button>
      //     <Icon name="trash" onClick={this.removeTestCase} />
      //   </div>
      //   <div className='testcase-content--body' ref={(elem) => elem ? this.setHeight(this.state.expanded, elem) : null}>
      //     {this.showTestCaseSetup(testCases, count)}
      //     {this.showTestCaseStep(testCases, count)}
      //     {this.showTestCaseTearDown(testCases, count)}
      //   </div>
      // </div>
      <div className="TCAWrapper">
        <InputGroup className="my-1">
          <Button
            outline
            size="sm"
            onClick={this.toggleClick}
            className="butTCA grpTCA"
          >
            <FontAwesomeIcon
              transform="grow-12"
              icon={this.getImage(this.state.expanded)}
            />
          </Button>

          <InputGroupAddon addonType="prepend" className="col grpTCA">
            <p
              className="myTextTCA"
              contentEditable={this.state.editing}
              ref={elem => {
                this.textId = elem;
              }}
            >
              Test Case {count}
            </p>
          </InputGroupAddon>

          <Button
            className="grpTCA butTCA"
            outline
            size="sm"
            onClick={this.edit}
          >
            <FontAwesomeIcon transform="grow-12" icon={this.changeIcon()} />
          </Button>

          <Dropdown
            className="grpTCA"
            isOpen={this.state.dropdownOpen}
            toggle={this.toggle}
          >
            <DropdownToggle caret>Add</DropdownToggle>
            <DropdownMenu>
              {this.disableSetup()}
              <DropdownItem onClick={this.stepAdd}>TestStep</DropdownItem>
              {this.disableTearDown()}
            </DropdownMenu>
          </Dropdown>

          <Button
            className="grpTCA butTCA"
            outline
            size="sm"
            onClick={this.removeTestCase}
          >
            <FontAwesomeIcon transform="grow-12" icon={faTrashAlt} />
          </Button>
        </InputGroup>
        <div
          className="testcase-content"
          ref={elem =>
            elem ? this.setHeight(this.state.expanded, elem) : null
          }
        >
          {this.showTestCaseSetup(testCases, count)}
          {this.showTestCaseStep(testCases, count)}
          {this.showTestCaseTearDown(testCases, count)}
        </div>
      </div>
    );
  }
}

export default testCaseAccordion;

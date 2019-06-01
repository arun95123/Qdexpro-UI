import React from "react";
import "./middlePane.Style.scss";
import AccordionComponent from "./AccordionComponent";
import SetupTearDown from "./SetupTearDown";
import Step from "./Step";
import Scenario from "./Scenario";
import TestCase from "./TestCaseAccordion";
import ClassMapper from "../ClassMapper";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class middlePane extends React.Component {
  constructor(props) {
    super(props);
    this.showSetup = this.showSetup.bind(this);
    this.showTearDown = this.showTearDown.bind(this);
    this.showTestCase = this.showTestCase.bind(this);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  componentDidMount() {
    const { getScenario } = this.props;
    getScenario();
  }

  showSetup(scenarioSetup) {
    if (scenarioSetup) {
      return (
        <div>
          <SetupTearDown title="Setup" isTestCase="false" />
          <hr />
        </div>
      );
    } else {
      return null;
    }
  }

  showTearDown(scenarioTearDown) {
    if (scenarioTearDown) {
      return (
        <div>
          <SetupTearDown title="TearDown" isTestCase="false" />
          <hr />
        </div>
      );
    } else {
      return null;
    }
  }

  showTestCase(testCases) {
    if (testCases.length != 0) {
      let testCaseItems = [];
      for (var i = 0; i <= testCases.length - 1; i++) {
        testCaseItems.push(<TestCase key={i} count={i + 1} />);
      }
      return (
        <div>
          {testCaseItems} <hr />
        </div>
      );
    } else return null;
  }

  render() {
    const {
      scenarioSetup,
      scenarioTearDown,
      testCases,
      getScenario,
      saveScenario
    } = this.props;
    return (
      <div className="middle-pane">
        <Button onClick={this.toggle}>AI Mapper</Button>
        <Modal
          backdrop="static"
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>AI Mapper</ModalHeader>
          <ModalBody>
            <ClassMapper />
          </ModalBody>
        </Modal>
        <Scenario />
        <hr />
        {this.showSetup(scenarioSetup)}
        {this.showTestCase(testCases)}
        {this.showTearDown(scenarioTearDown)}
        <Button onClick={saveScenario}>Create</Button>
      </div>
    );
  }
}

export default middlePane;

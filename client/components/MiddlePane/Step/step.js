import React, { Component } from "react";
import "./step.Style.scss";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Icon } from "reactstrap";
import ConfigWindow from "../../ConfigWindow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faAngleRight } from "@fortawesome/free-solid-svg-icons";

class step extends Component {
  constructor() {
    super();
    this.state = {
      modal: false
    };
    this.remove = this.remove.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  remove() {
    const { isTestCase, title, index, count, removeStep } = this.props;
    removeStep(isTestCase, title, count - 1, index);
  }

  render() {
    const { count, isTestCase, title } = this.props;
    return (
      <div className="step--content step--content--subcontent">
        <p className="step--content--text" onClick={this.toggle}>Step {count}</p>
        <Modal
          backdrop="static"
          isOpen={this.state.modal}
          toggle={this.toggle}
          size="xl"
        >
          <ModalHeader toggle={this.toggle}>Step {count} Configuration</ModalHeader>
          <ModalBody>
//       // <div className="step--content step--content--subcontent">
//       <div className="row myWrapper">
//         <Modal trigger={<p className="col myStepText">Step {count}</p>}>
//           <Modal.Header>Step {count} Configuration</Modal.Header>
//           <Modal.Content>
            <ConfigWindow
              isTestCase={isTestCase}
              title={title}
              index={count - 1}
            />
          </ModalBody>
        </Modal>
        <Button outline className="myGrpStep" onClick={this.remove}>
          <FontAwesomeIcon transform="grow-3" icon={faTrashAlt} />
        </Button>
      </div>
    );
  }
}
export default step;

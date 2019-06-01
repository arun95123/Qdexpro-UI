import React, { Component } from "react";
import AccordionBlock from "../AccordionBlock";
import "./accordionComponent.Style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import {
  faTrashAlt,
  faAngleRight,
  faAngleDown
} from "@fortawesome/free-solid-svg-icons";
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

class accordionComponent extends Component {
  constructor() {
    super();
    this.state = { expanded: false };
    this.getImage = this.getImage.bind(this);
    this.stepAdd = this.stepAdd.bind(this);
    this.toggleClick = this.toggleClick.bind(this);
    this.removeSetupTearDown = this.removeSetupTearDown.bind(this);
  }

  getImage(expanded) {
    return expanded ? faAngleDown : faAngleRight;
  }

  stepAdd() {
    const { addStep, isTestCase, title, index } = this.props;
    this.setState({ expanded: true });
    addStep(isTestCase, title, index);
  }

  toggleClick() {
    this.setState({ expanded: !this.state.expanded });
  }

  removeSetupTearDown() {
    const { title, isTestCase, removeSetupTearDown, index } = this.props;
    removeSetupTearDown(title, isTestCase, index);
  }

  render() {
    const {
      title,
      children,
      isTestCase,
      stepClick,
      index,
      addStep
    } = this.props;
    return (
      <div>
        <InputGroup className="my-1 myText">
          <Button
            outline
            size="sm"
            className="myGrp3 myGrpBut"
            onClick={this.toggleClick}
          >
            <FontAwesomeIcon
              transform="grow-12"
              icon={this.getImage(this.state.expanded)}
            />
          </Button>

          <InputGroupAddon
            className="myGrp3"
            addonType="prepend"
            className="col"
          >
            <p>{title}</p>
          </InputGroupAddon>

          <Button
            outline
            size="sm"
            className="myGrp3 myGrpBut"
            onClick={this.stepAdd}
          >
            <FontAwesomeIcon transform="grow-12" icon={faPlusSquare} />
          </Button>

          <Button
            outline
            size="sm"
            className="myGrp3 myGrpBut"
            onClick={this.removeSetupTearDown}
          >
            <FontAwesomeIcon transform="grow-12" icon={faTrashAlt} />
          </Button>
        </InputGroup>
        <AccordionBlock
          expanded={this.state.expanded}
          children={children}
          isTestCase={isTestCase}
          title={title}
          index={index}
        />
      </div>
    );
  }
}

export default accordionComponent;

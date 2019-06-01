import React, { Component } from "react";
import AccordionBlock from "../AccordionBlock";
import "./accordionComponent.Style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";

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
    return expanded ? "caret down icon" : "caret right icon";
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
      <div className="accordion-component">
        <div className="accordion-component--header">
          <i
            className={this.getImage(this.state.expanded)}
            onClick={this.toggleClick}
          />
          {title}
          <p className="accordion-component--plus" onClick={this.stepAdd}>
            <FontAwesomeIcon icon={faPlusSquare} />
          </p>
          <Icon
            className="accordion-component--trash"
            name="trash"
            onClick={this.removeSetupTearDown}
          />
        </div>
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

import React from 'react'
import './accordionBlock.Style.scss'

const accordionBlock = ({expanded, children, testCaseSetupteardownHeight, title, isTestCase}) => {
  const setHeight = (expanded, elem) => {
    elem.style.maxHeight = expanded ? elem.scrollHeight + 'px' : '0';
    testCaseSetupteardownHeight(isTestCase, title, elem.style.maxHeight.replace('px', ''));
  };

  return (
    <div
      className='accordion-block'
      ref={(elem) => elem ? setHeight(expanded, elem) : null}
    >
      {children}
    </div>
  );
}

export default accordionBlock;

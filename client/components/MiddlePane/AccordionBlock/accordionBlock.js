import React from 'react'
import './accordionBlock.Style.scss'

const accordionBlock = ({expanded, children}) => {
  return (
    <div
      className='accordion-block'
      ref={(elem) => elem ? setHeight(expanded, elem) : null}
    >
      {children}
    </div>
  );
}

const setHeight = (expanded, elem) => {
  elem.style.maxHeight = expanded ? elem.scrollHeight + 'px' : '0';
};

export default accordionBlock;

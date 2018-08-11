import React from 'react';
import './mainItem.Style.scss'
import {Icon} from 'semantic-ui-react'

const renderArrow = (status) => {
  if (status) {
      return (
        <Icon className='main-item--content--icon' name='caret down' />
      );
  } else {
      return (
        <Icon className='main-item--content--icon' name='caret right' />
      );
  }
}

const mainItem = ({label, onClick,status}) => {
  return (
      <div onClick={onClick} className='main-item'>
        <div className='main-item--content'>
          <div>{label}</div>
          <div>{renderArrow(status)}</div>
        </div>
      </div>
  );
};

export default mainItem;

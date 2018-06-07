import React from 'react';
import './mainItem.Style.scss'

const renderArrow = (status) => {
  if (status) {
      return (
              <div className='main-item--triangle--down'/>
      );
  } else {
      return (
              <div className='main-item--triangle--right'/>
      );
  }
}

const mainItem = ({label, onClick,status}) => {
  return (
      <div onClick={onClick} className='main-item'>
        <p className='main-item--content'>{label}</p>
        {renderArrow(status)}
      </div>
  );
};

export default mainItem;

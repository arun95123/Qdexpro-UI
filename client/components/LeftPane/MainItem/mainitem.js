import React from 'react';
import './mainItem.Style.scss'

const mainItem = ({label, onClick}) => (
       <div onClick={onClick} className='main-item'>
           <p className='main-item--content'>{label}</p>
      </div>
);

export default mainItem;

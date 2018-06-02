import React from 'react';
import { Link } from 'react-router-dom';
import './subItem.Style.scss'

const subItem = ({label}) => (
  <div className='sub-item'>
    <Link to='/about'>
      <p className='sub-item--content'>
        {label}
      </p>
    </Link>
  </div>
);

export default subItem;

import React from 'react';
import { Link } from 'react-router-dom';
import {Icon} from 'semantic-ui-react'
import './subItem.Style.scss'

const subItem = ({label}) => (
  <div className='sub-item'>
    <Link to='/scenario'>
      <p className='sub-item--content'>
        {label}  <Icon color='blue' name='plus' size='small' />
      </p>
    </Link>
  </div>
);

export default subItem;

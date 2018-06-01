import React from 'react';
import { Link } from 'react-router-dom';

const subItem = ({label}) => (
       <div>
           <Link to='/about'>{label}</Link>
      </div>
);

export default subItem;

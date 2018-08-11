import React from 'react';
import './leftPane.Style.scss';
import Scenario from './Scenario';
import {Icon} from 'semantic-ui-react'


const leftPane = () => (
    <div className='left-pane'>
      <div className='left-pane--header'>
      <h3 className='left-pane--header--text'>QDEXPRO</h3>
      <Icon name="world" size='large'/>
      </div>
      <hr/>
        <Scenario />
    </div>
);

export default leftPane;

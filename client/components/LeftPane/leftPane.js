import React from 'react';
import './leftPane.Style.scss';
import Scenario from './Scenario';


const leftPane = () => (
    <div className='left-pane'>
        <img className='left-pane--logo' src="pp.jpg" />
        <Scenario />
    </div>
);

export default leftPane;

import React from 'react'
import './middlePane.Style.scss'
import AccordionComponent from './AccordionComponent'
import Scenario from './Scenario'

const middlePane =() =>(
    <div className='middle-pane'>
        <Scenario />
        <hr />
        <AccordionComponent />
        <hr />
    </div>
);

export default middlePane;

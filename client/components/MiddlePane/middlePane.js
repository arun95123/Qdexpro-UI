import React from 'react'
import './middlePane.Style.scss'
import AccordionComponent from './AccordionComponent'
import Step from './Step'
import Scenario from './Scenario'

const middlePane =() =>(
    <div className='middle-pane'>
        <Scenario />
        <hr />
        <AccordionComponent title='title'>
          <Step />
        </AccordionComponent>
        <hr />
    </div>
);

export default middlePane;

import React from 'react'
import AccordionComponent from '../AccordionComponent'
import Step from '../Step'

const setupTearDown =({title}) =>(
  <AccordionComponent title={title}>
    <Step />
  </AccordionComponent>
);

export default setupTearDown;

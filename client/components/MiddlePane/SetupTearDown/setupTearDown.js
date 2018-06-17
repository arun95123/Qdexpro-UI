import React from 'react'
import AccordionComponent from '../AccordionComponent'

const setupTearDown =({title}) =>(
  <AccordionComponent
    title={title}
    children='children'
  />
);

export default setupTearDown;

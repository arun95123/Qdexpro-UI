import React from 'react'
import '../middlePane.Style.scss'
import Step from '../Step'

const accordionComponent =() =>(
  <div class="ui accordion">
  <div class="title">
    <div className='middle-pane--content'>
        <p className='middle-pane--content--caret--right'>
            <i className="caret right icon"></i></p>
        <p className='middle-pane--content--text'>Setup</p>
        <p className='middle-pane--content--plus'><i className="plus circle icon"></i></p>
    </div>
  </div>
  <div class="content">
    <Step />
  </div>
  </div>

  );

export default accordionComponent;

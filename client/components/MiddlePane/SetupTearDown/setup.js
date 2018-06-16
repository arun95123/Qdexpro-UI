import React from 'react'
import './middlePane.Style.scss'

const setupTearDown =() =>(
  <div className='setupTearDown-content'>
      <p className='middle-pane--content--caret--right'>
          <i className="caret right icon"></i></p>
      <p className='middle-pane--content--text'>Setup</p>
      <p className='middle-pane--content--plus'><i className="plus circle icon"></i></p>
  </div>
  );

export default setupTearDown;

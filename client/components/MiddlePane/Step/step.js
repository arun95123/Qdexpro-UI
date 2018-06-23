import React from 'react'
import '../middlePane.Style.scss'

const step =({count}) =>(
  <div className='middle-pane--content middle-pane--content--subcontent'>
      <p className='middle-pane--content--caret--right'>
           <i className="angle right icon"></i></p>
      <p className='middle-pane--content--text'>Step {count}</p>
  </div>

  );

export default step;

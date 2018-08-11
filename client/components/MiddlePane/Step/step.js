import React from 'react'
import './step.Style.scss'
import {Modal} from 'semantic-ui-react'
import ConfigWindow from '../../ConfigWindow'

const step =({count}) =>(
  <div className='step--content step--content--subcontent'>
    <p className='step--content--caret--right'>
      <i className="angle right icon"></i></p>
  <Modal trigger={<p className='step--content--text'>Step {count}</p>}>
  <Modal.Header>Step {count} Configuration</Modal.Header>
  <Modal.Content>
    <ConfigWindow />
  </Modal.Content>
  </Modal>
  </div>
  );

export default step;

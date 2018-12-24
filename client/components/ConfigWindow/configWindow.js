import React from 'react'
import './configWindow.Style.scss'
import LeftWindow from './LeftWindow'
import RightWindow from './RightWindow'

const submit = (values,props) => {
  console.log(values);
  props.saveStep(values,props.isTestCase,props.title,props.index);
}

const configWindow = (props) => (
  <div className="configWindow">
    <LeftWindow isTestCase={props.isTestCase} title={props.title} index={props.index} onSubmit={(values) => submit(values,props)}/>
    <RightWindow />
  </div>
)

export default configWindow;

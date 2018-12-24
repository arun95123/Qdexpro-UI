import React from 'react'
import './configWindow.Style.scss'
import LeftWindow from './LeftWindow'
import RightWindow from './RightWindow'
import showResults from './showResults'

const submit = values => {
  console.log(values);
}

const configWindow = (isTestCase,title,index) => (
  <div className="configWindow">
    <LeftWindow isTestCase={isTestCase} title={title} index={index} onSubmit={submit}/>
    <RightWindow />
  </div>
)

export default configWindow;

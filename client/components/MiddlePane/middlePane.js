import React from 'react'
import './middlePane.Style.scss'

const middlePane =() =>(
    <div className='middle-pane'>
        <div className='middle-pane--content'>
            Scenario
            <button className='middle-pane--content--button'>Edit</button>
        </div>
        <hr />
        <div className='middle-pane--content'>
            Add Scenario Component
            <button className='middle-pane--content--button'>Add</button>
        </div>
        <hr />
        <div className='middle-pane--content'>
            Setup
            <p className='middle-pane--content--triangle--down'/>
        </div>
        <div className='middle-pane--subcontent'>
            <p>Step 1</p>
        </div>
        <hr />
        <div className='middle-pane--content'>
            Test Case
            <p className='middle-pane--content--triangle--down'/>
        </div>
        <div className='middle-pane--subcontent'>
            Add Test Case Component
        </div>
        <hr />

    </div>
);

export default middlePane;
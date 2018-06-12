import React from 'react'
import './middlePane.Style.scss'

const middlePane =() =>(
    <div className='middle-pane'>
        <div className='middle-pane--content'>
            <p className='middle-pane--content--caret--right'>
                <i className="caret right icon"></i></p>
            <p className='middle-pane--content--text'>Scenario</p>
            <p className='middle-pane--content--edit'>
                <i className="edit icon"></i></p>
            <button className='middle-pane--content--button'>Add</button>
        </div>
        <hr />
        <div className='middle-pane--content'>
            <p className='middle-pane--content--caret--right'>
                <i className="caret right icon"></i></p>
            <p className='middle-pane--content--text'>Setup</p>
            <button className='middle-pane--content--button'>Add</button>
        </div>
        <div className='middle-pane--subcontent'>
            <i className="angle right icon"></i>
            <p>Step 1</p>
        </div>
        <hr />
        <div className='middle-pane--content'>
            <p className='middle-pane--content--caret--right'>
                <i className="caret right icon"></i></p>
            <p className='middle-pane--content--text'>Test Case</p>
            <p className='middle-pane--content--edit'>
                <i className="edit icon"></i></p>
            <button className='middle-pane--content--button'>Add</button>
        </div>
        <div className='middle-pane--content'>
            <p className='middle-pane--content--caret--right'>
                <i className="caret right icon"></i></p>
            <p className='middle-pane--content--text'>Setup</p>
            <button className='middle-pane--content--button'>Add</button>
        </div>
        <div className='middle-pane--subcontent'>
            <i className="angle right icon"></i>
            <p>Step 1</p>
        </div>
        <hr />

    </div>
);

export default middlePane;
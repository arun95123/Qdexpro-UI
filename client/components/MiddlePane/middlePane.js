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
            <p className='middle-pane--content--plus'><i className="plus circle icon"></i></p>
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
        <div className='middle-pane--subcontent'>
            <p className='middle-pane--subcontent--caret--right'>
                <i className="caret right icon"></i></p>
            <p className='middle-pane--subcontent--text'>Setup</p>
            <p className='middle-pane--content--plus'><i className="plus circle icon"></i></p>
        </div>
        <div className='middle-pane--subcontent2'>
            <i className="angle right icon"></i>
            <p>Step 1</p>
        </div>
        <div className='middle-pane--subcontent'>
            <p className='middle-pane--subcontent--caret--right'>
                <i className="caret right icon"></i></p>
            <p className='middle-pane--subcontent--text'>Test Case 1</p>
            <p className='middle-pane--content--plus'><i className="plus circle icon"></i></p>
        </div>
        <div className='middle-pane--subcontent2'>
            <i className="angle right icon"></i>
            <p>Step 1</p>
        </div>
        <hr />

    </div>
);

export default middlePane;
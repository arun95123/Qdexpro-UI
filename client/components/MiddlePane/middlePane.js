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
        <div className='middle-pane--content middle-pane--content--subcontent'>
            <p className='middle-pane--content--caret--right'>
                 <i className="angle right icon"></i></p>
            <p className='middle-pane--content--text'>Step 1</p>
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
        <div className='middle-pane--content middle-pane--content--subcontent'>
            <p className='middle-pane--content--caret--right'>
                <i className="caret right icon"></i></p>
            <p className='middle-pane--content--text'>Setup</p>
            <p className='middle-pane--content--plus'><i className="plus circle icon"></i></p>
        </div>
        <div className='middle-pane--content middle-pane--content--subcontent2'>
            <p className='middle-pane--content--caret--right'>
                <i className="angle right icon"></i></p>
            <p className='middle-pane--content--text'>Step 1</p>
        </div>
        <div className='middle-pane--content middle-pane--content--subcontent'>
            <p className='middle-pane--content--caret--right'>
                <i className="caret right icon"></i></p>
            <p className='middle-pane--content--text'>Test Step 1</p>
            <p className='middle-pane--content--plus'><i className="plus circle icon"></i></p>
        </div>
        <div className='middle-pane--content middle-pane--content--subcontent2'>
              <p className='middle-pane--content--caret--right'>
                  <i className="angle right icon"></i></p>
            <p className='middle-pane--content--text'>Step 1</p>
        </div>
        <hr />

    </div>
);

export default middlePane;

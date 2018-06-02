import React from 'react';
import './mainItem.Style.scss'

const mainItem = ({label, onClick,status}) => {
    if (status) {
        return (
            <div onClick={onClick} className='main-item'>
                <p className='main-item--content'>{label}</p>
                <p className='main-item--triangle--down'/>
            </div>)
    } else {
        return (
            <div onClick={onClick} className='main-item'>
                <p className='main-item--content'>{label}</p>
                <p className='main-item--triangle--right'/>
            </div>)
    }
};

export default mainItem;

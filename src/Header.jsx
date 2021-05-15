import React from 'react'
import './Header.css';

const Header = ({ todos }) => {
    return (
        <div>
            <h1> Hello todo </h1>
            <div className='countInfo'>해야할일  : {todos.length}</div>
        </div>
    )
}
export default Header;
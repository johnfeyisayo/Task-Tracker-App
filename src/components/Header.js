import React from 'react';
import Button from './Button';
import "./Header.css";


const Header = ({ onAdd, showAdd }) => {
  return (
    <div className='-container'>
      <header className='header'>
        <h1>Task Tracker</h1>
      <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
      </header>
    </div>
  )
}

export default Header

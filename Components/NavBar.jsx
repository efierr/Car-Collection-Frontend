import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <header className="">
      <div className="jumbotron header">
      <h1 className='inline-block'>Cars Collection</h1>
      <Link className='inline-block float-right btn btn-default btn-outline-primary' to="/newcar">New Car</Link>
      </div>
    </header>
  )

}

export default NavigationBar;

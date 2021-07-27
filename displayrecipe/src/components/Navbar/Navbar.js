import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <img src='https://img.icons8.com/color/48/000000/cookbook.png' />
        <p className={classes.logo}>Recipes</p>
      </div>
    </div>
  );
};

export default Navbar;

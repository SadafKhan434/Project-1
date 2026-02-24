import React, { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from"./Header.module.css";
const Header =(props)=>{
return(
    <Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCartButton/>
            <h2>Delicious Food</h2>
            </header>
        <div className={classes['main-image']}>
        <img src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg"/>
</div>
    </Fragment>
)
}
export default Header;
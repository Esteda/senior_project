import React from "react"
import classes from  "./box.css"
import icon from "./icon.png"

const Box =()=>{
    return(
        <div className={classes.found}>
            <div className={classes.back}></div>
            <div className={classes.content}>
                <img className={classes.icon} src={icon}/>
            </div>
            <div className={classes.base}>
            </div>
            <button className={classes.button}>Start</button>
        </div>
    )
}

export default Box;
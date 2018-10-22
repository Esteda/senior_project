import React from "react"
import Box from "./Box/box"
import classes from './newGame.css'

const NewGame =()=>{
    return(
        <div className={classes.base}>
            <Box className={classes.box1}>Matching game</Box>
            <Box className={classes.box2}>Questionnare</Box>
        </div>
    )
}

export default NewGame;
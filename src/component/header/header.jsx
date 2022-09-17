import React, { useContext} from "react";
import { useHistory } from "react-router-dom";
import { PollContext } from '../../context/context';
import {Button} from '@material-ui/core'

const Header =()=>{
    const history =useHistory();
    const {votes ,count} = useContext(PollContext);
    console.log("3333",votes)
    const handleResult = (e) =>{
        e.preventDefault()
        history.push('/pollResult')
    }

    const handleSelectChoices = (e) =>{
        e.preventDefault()
        history.push('/selected-choices')
    }
    return(
    < div className="Header">
    <Button href="/" disabled ={count!==3? true :false} variant="contained" onClick={handleResult} >
      Result
    </Button>
    <Button href="/" variant="contained" onClick={handleSelectChoices}>
      Selected-Choices
    </Button>
    </div>
    )
}
export default Header;
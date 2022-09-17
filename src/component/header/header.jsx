import React, { useContext } from "react";
import { PollContext } from '../../context/context';
import {Button} from '@material-ui/core'

const Header =()=>{
    const {votes} = useContext(PollContext);
    return(
    <>
    <Button href="/pollResult" disabled ={votes.length === 0 ? true :false} variant="contained">
      Result
    </Button>
    <Button href="/selected-choices" variant="contained">
      Selected-Choices
    </Button>
    </>
    )
}
export default Header;
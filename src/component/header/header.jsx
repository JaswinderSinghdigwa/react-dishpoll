import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PollContext } from '../../Context/context'


const Header =()=>{
    const navigate = useNavigate();
    const {votes} = useContext(PollContext);

    return(
    <Button href="/" disabled ={votes.length === 0 ? true :false} variant="contained">
      Selected-Choices
    </Button>)
}
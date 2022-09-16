import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PollContext } from '../../Context/context'


const Header =()=>{
    const navigate = useNavigate();
    const {votes} = useContext(PollContext);

    return(
    <Button href="/" variant="contained">
      Link
    </Button>)
}
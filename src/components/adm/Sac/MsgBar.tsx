import { Box, Card, TextField, Button, Container, Grid,} from "@mui/material";
import { useEffect, useState, useContext } from "react"
import { Btn } from "../../bases/buttons/Button";
import { socket } from "../../../socket.io";
import jwt_decode from "jwt-decode";
import ModalContext from "../../../context/Modalcontext";
import axios from "axios";


export function MsgBar() {
    socket.connect();
    const { setAdmMsg, Ticket } = useContext(ModalContext);
    const [ chatTicket, Setchat ] = useState('');
    const [ Msg, SetMsg ] = useState('');
    const [ bool, Setbool ] = useState(Boolean);

    function name() {
        socket.connect()
        Setbool(true);
        var token = localStorage.getItem('token');

        if (token) {
            const decoded = jwt_decode(token);
            console.log('this is decoded: ', decoded);
            
            console.log(socket.connected)
            
            socket.emit("userMensage", Msg, decoded.adm_id,'Admin', Ticket, (error) => {
                setAdmMsg(Msg)
                console.log('messagem enviada!');
                if (error) {
                    console.log(error);
                }
            })
            
        };
    }



    return(
        <>
         
    </>
    )
}
import { Box, Card, TextField } from "@mui/material";
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

    function name() {
        socket.connect()
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
        <Box sx={{
            position: 'absolute'
        }}>
            <TextField variant="outlined" color="success" label='Digite sua Mensagem...' onChange={i => SetMsg(i.target.value)} value={Msg} sx={{
                width: '45vw',
                marginTop:'92vh',
                ml: '45vw',
                position: 'absolute'
            }} />
            <Btn bc="blue" cl='green' ml='90vw' fun={name} name=">>" Mt="94vh" vis='visible' sx={{
                position: 'relative',
            }}></Btn>
        </Box>
        </>
    )
}
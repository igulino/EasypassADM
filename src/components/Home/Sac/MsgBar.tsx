import { Box, TextField } from "@mui/material";
import { useState } from "react"
import { Btn } from "../../Button";



export function MsgBar() {
    const [ Msg, setMsg ] = useState('');

    return(
        <>
        <Box sx={{
            position: 'absolute'
        }}>
            <TextField variant="outlined" color="success" label='Digite sua Mensagem...' onChange={i => Setmsg(i.target.value)} value={Msg} sx={{
                width: '45vw',
                marginTop:'92vh',
                ml: '45vw',
                position: 'absolute'
            }} />
            <Btn bc="blue" cl='green' ml='90vw' name=">>" Mt="94vh" vis='visible' sx={{
                position: 'relative',
            }}></Btn>
        </Box>
        </>
    )
}
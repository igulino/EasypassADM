import { Box, TextField } from "@mui/material";


export function Bussines() {
    return(<>
        <Box sx={{
            background: 'red',
            width: '60vw',
            height: '90vh',
            ml: '30vw',
            mt: '20vh',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
                cadastrar empresa
                <TextField></TextField>
        </Box></>)
}
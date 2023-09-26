import { Box } from "@mui/material";
import { Chat } from "../components/Sac/chat";
import { Msg } from "../components/Sac/msg";
import MenuLateral from "../components/menuLateraal";

export function Sac() {
    return (
        <Box sx={{
            display: 'flex',
            
        }}>
            <Chat />
            <Msg />
            <MenuLateral />
        </Box>
    )
}
import { Box } from "@mui/material";
import { Chat } from "../components/Home/Sac/chat";
import { Msg } from "../components/Home/Sac/msg";
import MenuLateral from "../components/menuLateraal";
import { MsgBar } from "../components/Home/Sac/MsgBar";

export function Sac() {
    return (
        <Box sx={{
            display: 'flex',
            
        }}>
            <Chat />
            <Msg />
            <MsgBar />
            <MenuLateral />
        </Box>
    )
}
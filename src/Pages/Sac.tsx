import { Box } from "@mui/material";
import { Chat } from "../components/adm/Sac/chat";
import { Msg } from "../components/adm/Sac/msg";
import MenuLateral from "../components/adm/menu/menuLateral";
import { MsgBar } from "../components/adm/Sac/MsgBar";

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
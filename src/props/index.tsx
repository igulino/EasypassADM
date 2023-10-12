import { Typography, Box } from "@mui/material";
import axios from "axios";

interface takeTicketProps {
    cast?: string ;
}
/*
export class TakeTicket {
    cast: string
    constructor(cast: string) {
        this.cast = cast;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}*/

export function TakeTicket(cast : takeTicketProps) {

    console.log('this is cast aa: ', cast.cast);
    const ticket = cast.cast;
    var take
    const a = communicate(take);
    async function communicate(take: any) {
        take = await axios.post('http://localhost:3345/message', {
            sac_sac_ticket: ticket
        })

        console.log('take take: ', take.data);
        
        return(take)
    }

    console.log(a);
    
    return(<>
        <Box>
            {}
        </Box></>)
}
import { Typography } from "@mui/material";
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

    console.log('this is cast: ', cast.cast);
    const ticket = cast.cast;
    communicate()
    async function communicate() {
        const take = await axios.post('http://localhost:3345/message', {
            sac_sac_ticket: ticket
        })

        console.log('take take: ', take);
        
    }
    
    return(<><Typography>a</Typography></>)
}
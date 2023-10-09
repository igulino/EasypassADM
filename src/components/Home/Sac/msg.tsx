import { Box, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import ModalContext from "../../../context/Modalcontext";

export function Msg() {
  const [ sla, setsla ] = useState(localStorage.getItem('ticket'))
  const {Ticket} = useContext(ModalContext)
  useEffect(() =>{console.log('this is ticket hahaha: ', Ticket);
  }, [Ticket])
  
  return (
    <>
      <Box sx={{
        position: 'relative'
      }}>
        <Typography>
          kasldjhvgnklsdbflbvsdjbwebvksdghbrvkjlbdasf gbri sdjgbwervk asrnghwv
          lasrgh
        </Typography>
      </Box>
    </>
  );
}

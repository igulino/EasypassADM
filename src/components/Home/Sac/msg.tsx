import { Box, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import ModalContext from "../../../context/Modalcontext";
import { TakeTicket } from "../../../props";
export function Msg() {

  return (
    <>
      <Box sx={{
        position: 'relative'
      }}>
    
        <Typography><TakeTicket></TakeTicket>
        </Typography>
      </Box>
    </>
  );
}

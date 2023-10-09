import { Box, TextField, Card} from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react"
import ModalContext from "../../../context/Modalcontext";
import { TakeTicket } from "../../../props";

export function Chat() {
  const { Ticket, setTicket } = useContext(ModalContext);

  const [ menTicket, SetmenTicket ] = useState('');
  const [ perfil, setPerfil ] = useState('');
  const [ test, SetTest ] = useState([]);
  const [ ft, Setft ] = useState([]);

  setTimeout(() =>{
    takeMenData()
    
  }, 6000)

    async function takeMenData() {
        
        SetmenTicket(await axios.get('http://localhost:3345/admSac'));
        if (menTicket.data != undefined) {
          SetTest(menTicket.data.lastMen);
          Setft(menTicket.data.perfil);
          console.log('this is ft: ', ft);
          
          console.log('this is menticket: ', menTicket.data);
        };
    }
    
  useEffect(() =>{
     
  }, [menTicket]);

    
  return (
    <>
      <Box
        sx={{
          backgroundColor: "red",
          height: "100vh",
          width: "25vw",
          ml: "20vw",
          position: 'relative'
        }}>
        <Box>
            <TextField variant="standard" label="Pesquisar..."/>
        </Box>
        { test != undefined ? (
          test.slice().reverse().map((x, index) => {
            
            return (
              <Card 
                onClick={() =>{TakeTicket({cast: x.sac_sac_ticket})}}
                key={x.sac_sac_ticket}
                sx={{
                  height: '10vh',
                  width: '20vw',
                  position: 'absolute',
                  zIndex: 1,
                  mt: `${index * 15}vh`
                }}
              > 
                {x.sacmen_texto}
              </Card>
            );
             
          })

        ):(null)}
        
       
      </Box>
    </>
  );
}

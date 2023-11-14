import { Box, Typography, Card} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { socket } from "../../../socket.io/index";
import ModalContext from "../../../context/Modalcontext";
import axios from "axios";

export function Msg() {
  socket.connect()
  const { Ticket } = useContext(ModalContext);
  const [ take, taker ] = useState(null);
  const [ test, Dotest ] = useState(null);

   async function communicate() {
        taker(await axios.post('http://localhost:3344/message', {
            sac_sac_ticket: Ticket
        }))

        
    }
    //só fazer o bglh do socket agr pra ir atualizando as paradas 
    
    setTimeout(() => {
      console.log('recived!', socket.connected, test);

      socket.on("userMensage", (message) => {
        console.log('messagem recebida: ', message);
        Dotest(message)  
      });
      
  }, 2000);
  
  useEffect(() =>{communicate()}, [Ticket])
  return (
    <>
      <Box sx={{
        position: 'relative'
      }}>
    
    <Typography>
                { take != null ? (
                    
                    take.data.map((x) => {
                        console.log('this is ellll take: ', take);
                        console.log('exo kun: ', x.sacmen_texto);
                        
                        return (
                          <Card 
                            key={x.sacmen_id}
                            sx={{
                              height: '10vh',
                              width: '20vw',
                              position: 'absolute',
                              zIndex: 1,
                              mt: `${x.sacmen_id * 15}vh`
                            }}
                          > 
                            {x.sacmen_texto}
                          </Card>
                        );
                         
                      })
                   
                    ):('Erro de conexão')}
                </Typography>
      </Box>
    </>
  );
}

import { Box, Typography, Card} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { socket } from "../../../socket.io/index";
import ModalContext from "../../../context/Modalcontext";
import axios from "axios";

export function Msg() {
  socket.connect()
  const { Ticket, Msg } = useContext(ModalContext);
  const [ take, taker ] = useState(null);
  const [ chatTicket, Setchat ] = useState('');

   async function communicate() {
        taker(await axios.post('http://localhost:3344/message', {
            sac_sac_ticket: Ticket
        }))
      console.log('this is take: ', take);
        
    }
    //só fzr as mnsgs do adm irem pro banco e voltarem formatadas da mesma forma que a dos user
    
    setTimeout(() => {
      console.log('recived!', socket.connected);
      socket.on("userMensage", (message) => {
        console.log('messagem recebida: ', message[0].sac_sac_ticket);
        
        if (Ticket == message[0].sac_sac_ticket && message != 'admin'){
         
          taker(message)
        }
        
        
      });
      
  }, 2000);
  //console.log('messagem recebida: ', take);
  useEffect(() =>{communicate()}, [Ticket])
  return (
    <>
      <Box sx={{
        position: 'relative'
      }}>
    
    <Typography>
                { take != null ? (
                  take.data != undefined ? (
                    take.data.map((x) => {
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

                  ):(
                    take.map((x) => {
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
                  )
                    
                    
                   
                    ):('Erro de conexão')}
                </Typography>
      </Box>
    </>
  );
}

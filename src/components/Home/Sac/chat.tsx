import { Box, TextField, Card} from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react"
import ModalContext from "../../../context/Modalcontext";

export function Chat() {
  const { Ticket, setTicket } = useContext(ModalContext);

  const [ menTicket, SetmenTicket ] = useState('');
  const [ perfil, setPerfil ] = useState('');
  const [ test, SetTest ] = useState([]);
  const [ ft, Setft ] = useState([]);
  const [ ticketN, SetTicketN ] = useState(Array);

  setTimeout(() =>{
    takeMenData()
    
  }, 6000)

    async function takeMenData() {
        
        SetmenTicket(await axios.get('http://localhost:3345/admSac'));
       
    }
    
  useEffect(() =>{
      if (menTicket.data != undefined) {
        SetTest(menTicket.data.lastMen);
        Setft(menTicket.data.perfil);
        console.log('this is ft: ', ft);
        
      };
  }, [menTicket]);
/*
  async function ftPerfil(x: any) {
      const perfilimage = ft.user_FotoPerfil
      console.log(perfilimage);

      if (perfilimage) {
          const response = await axios.post(
            'http://localhost:3344/user/returnperfil',
              {
                filename: perfilimage,
              },
              {
                responseType: 'arraybuffer',
              }
              );

              const arrayBufferView = new Uint8Array(response.data);
              const blob = new Blob([arrayBufferView], { type: 'image/jpeg' });

              const reader = new FileReader();
              reader.readAsDataURL(blob);
              reader.onloadend = () => {
              setPerfil(reader.result) // A URL Base64 será armazenada em imageUrlWithPrefix
                console.log(response.data);
                console.log(perfil);
              };
              return perfil
            }}
    
   */
    console.log('this is menticket: ', menTicket.data);
    async function name() {
      try {
        if (ticketN != null) {

          setTicket?.(ticketN);
          console.log('é u: ', Ticket);
          
        }
      } catch (error) {
        console.log(error);
        
      }
     
    }
    
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
                onClick={() =>{SetTicketN(x.sac_sac_ticket), name()}}
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

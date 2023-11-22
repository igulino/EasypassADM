import { Box, Typography, Card, Grid, Container, TextField, Button} from "@mui/material";
import { useContext, useEffect, useState, useRef} from "react";
import jwt_decode from "jwt-decode";
import { socket } from "../../../socket.io/index";
import ModalContext from "../../../context/Modalcontext";
import axios from "axios";


//cpf: 43424546765
//senha do usuário teste
//#SouUsuario1

export function Msg() {
  socket.connect()
  const { Ticket } = useContext(ModalContext);
  const [ take, taker ] = useState<any>([]);
  const messagesContainerRef = useRef<HTMLDivElement>(null);;
  
  const { setAdmMsg } = useContext(ModalContext);
  const [ chatTicket, Setchat ] = useState('');
  const [ Msg, SetMsg ] = useState('');
  const [ bool, Setbool ] = useState(Boolean);

    function name() {
        socket.connect()
        Setbool(true);
        var token = localStorage.getItem('token');

        if (token) {
            const decoded = jwt_decode(token);
            console.log('this is decoded: ', decoded);
            
            console.log(socket.connected)
            
            socket.emit("userMensage", Msg, decoded.adm_id,'Admin', Ticket, (error) => {
                setAdmMsg(Msg)
                console.log('messagem enviada!');
                if (error) {
                    console.log(error);
                }
            })
            
        };
    }

   async function communicate() {
        taker(await axios.post('https://easypass-iak1.onrender.com/message', {
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
  useEffect(() =>{communicate()}, [Ticket]);
  useEffect(() => {
    setTimeout(() => {
      messagesContainerRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setTimeout(() => {
        messagesContainerRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }, 1000);
    }, 1000);

  }, [take.length]);
  return (
    <>
    <Box id="chat" sx={{
        height: '92.7vh',
        width: '55vw',
        position: 'relative',
        overflowX: 'hidden',
        overflowY: 'hidden'
      }}>
    <Grid sx={{
          height: '100%',
          flex: 1,
        }}>
    <Container sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            flexDirection: 'column',
            alignItems: 'flex-end',
            overflowY: "auto",
            height: take ? '88%' : '80%'
          }}>
      <div
              style={{
                height: "100%",
                position: "relative"
              }}>
    
                { take != null ? (
                  take.data != undefined ? (
                    take.data.map((x) => {
                      console.log('exo kun: ', x.sacmen_texto);
                      if (x.admin_adm_id) {
                        return(
                          <Card 
                          key={x.sacmen_id}
                          sx={{
                            height: 'auto',
                            width: 'auto',
                            display: "table",
                            backgroundColor: "rgb(50, 50, 50)",
                            paddingTop: 2,
                            paddingBottom: 2,
                            //position: 'absolute',
                            //zIndex: 1,
                            ml: '30vw',
                            mt: `${x.sacmen_id * 1}vh`
                          }}
                        > <Container>
                        <Typography
                          style={{
                            wordWrap: "break-word",
                            maxWidth: "30vw",
                            color: "white",
                            textAlign: 'left', // Alinha o texto à direita
                          }}
                        >
                          {x.sacmen_texto}
                        </Typography>
                        </Container>
                        <div ref={messagesContainerRef}></div>
                        </Card>
                        )
                      }else
                      return (
                        <Card 
                          key={x.sacmen_id}
                          sx={{
                            height: 'auto',
                            maxWidth: "100%",
                            width: 'auto',
                            display: "table",
                            backgroundColor: "rgb(50, 50, 50)",
                            paddingTop: 2,
                            paddingBottom: 2,
                            //position: 'absolute',
                            //zIndex: 1,
                            mt: `${x.sacmen_id * 1}vh`
                          }}
                        >   
                           <Container>
                              <Typography
                                style={{
                                  wordWrap: "break-word",
                                  maxWidth: "30vw",
                                  color: "white",
                                  textAlign: 'left', // Alinha o texto à direita
                                }}
                              >
                                {x.sacmen_texto}
                              </Typography>
                          </Container>
                          <div ref={messagesContainerRef}></div>
                        </Card>
                      );
                      
                    })

                  ):(
                    take.map((x) => {
                      console.log('exo kun: ', x.sacmen_texto);
                      if (x.admin_adm_id) {
                        return(
                          <Card 
                          key={x.sacmen_id}
                          sx={{
                            height: 'auto',
                            width: 'auto',
                            maxWidth: "100%",
                            display: "table",
                            backgroundColor: "rgb(50, 50, 50)",
                            paddingTop: 2,
                            paddingBottom: 2,
                            //position: 'absolute',
                            //zIndex: 1,
                            ml: '30vw',
                            mt: `${x.sacmen_id * 1}vh`
                          }}
                        > 
                      <Container>
                        <Typography
                          style={{
                            wordWrap: "break-word",
                            maxWidth: "30vw",
                            color: "white",
                            textAlign: 'left', // Alinha o texto à direita
                          }}
                        >
                          {x.sacmen_texto}
                        </Typography>
                      </Container>
                      <div ref={messagesContainerRef}></div>
                        </Card>
                        )
                      }else
                      
                      return (
                        <Card 
                          key={x.sacmen_id}
                          sx={{
                            ml: 'auto',
                            height: 'auto',
                            width: "auto",
                            maxWidth: "100%",
                            display: "table",
                            backgroundColor: "rgb(50, 50, 50)",
                            paddingTop: 2,
                            paddingBottom: 2,
                            //position: 'absolute',
                            //zIndex: 1,
                            mt: `${x.sacmen_id * 1}vh`
                          }}
                        > 
                      <Container>
                        <Typography
                          style={{
                            wordWrap: "break-word",
                            maxWidth: "30vw",
                            color: "white",
                            textAlign: 'left', // Alinha o texto à direita
                          }}
                        >
                          {x.sacmen_texto}
                        </Typography>
                      </Container>
                      <div ref={messagesContainerRef}></div>
                        </Card>
                      );
                      
                    })
                  )
                    ):('Erro de conexão')}
                
        </div>
        </Container>

        <Container sx={{
            height: '10vh',
            ml: 3,
            marginBottom: '20px', // Ajuste conforme necessário
            display: 'flex',
            alignItems: 'center',
          }}>

            <TextField
              variant="outlined"
              color="success"
              label="Digite sua Mensagem..."
              onChange={i => SetMsg(i.target.value)}
              value={Msg}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  name();
                }
              }}
              sx={{
                width: "30vw",
              }}
            />

            <Button
              disabled={bool === undefined ? false : bool }
              variant="contained"
              onClick={name}
              sx={{
                width: "6%",
                height: "6.5vh",
                ml: "0.5vw",
              }}
            />
          </Container>
        </Grid>
      </Box>
    </>
  );
}

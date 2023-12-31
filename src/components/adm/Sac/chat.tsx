import { Box, TextField, Card} from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react"
import ModalContext from "../../../context/Modalcontext";
import { TakeTicket } from "../../../props";
import React from "react";

export function Chat() {
  const { Ticket, setTicket } = useContext(ModalContext);

  const [ menTicket, SetmenTicket ] = useState('');
  const [ perfil, setPerfil ] = useState('');
  const [ count, Setcount ] = useState(1);
  const [ test, SetTest ] = useState([]);
  const [ ft, Setft ] = useState([]);

  setTimeout(() => {
    Setcount(count + 1)
    console.log('mds q ódio: ');
    /*sim eu tenho que dar essa volta toda pra chamar a "call()" pq se n da ruim, ent n tenta colocar o
    Script de "call()" direto aqui pq o timeout por algum motivo tá chamando a arrow function dele mais de uma vez
    ai já viu né, começa a fazeer 10.000 reaquisições simultâneas ai n tem sistéma que aguente*/
  }, 2000)

  useEffect(() =>{
    console.log('this is ticket: ', Ticket);
    
    call()
  }, [count])

    async function call() {
        
        SetmenTicket(await axios.get('https://easypass-iak1.onrender.com/admSac'));
        if (menTicket.data != undefined) {
          /*for (let index = 0; index < MessageData.length; index++) {
                
                prom.push(MessageData[index]);
               
                console.log('this is index and messagedata length: ', index, MessageData.length);
                if (index + 1 == MessageData.length) {
                    val = 'max';
                    return prom.map((value) => {
                        console.log(value);
                        t = Promise.resolve(value);
                        t.then((value) => {
                            
                            return LastArr.push(value[0])
                        })
                        
                    });
                }
            }*/
          SetTest(menTicket.data.lastMen);
          Setft(menTicket.data.perfil);
          console.log('this is ft: ', ft);
          
          console.log('this is menticket: ', menTicket.data);
        };
    }
 
    
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          width: "25vw",
          ml: "20vw",
          border: '1',
          position: 'relative',
          background: 'linear-gradient(180deg, #ECEBEB 1%, #fff 99%)',
          boxShadow: '2px 0px 6px rgba(0, 0, 0, 0.6)',
        }}>
        <Box
        sx={{
          mb:'2vh'
        }}>
            <TextField variant="standard" label="Pesquisar..." sx={{
              ml:'2vw',
              width:'20vw',
              background: "transparent",
            }}/>
        </Box>
        { test != undefined ? (
          test.map((x, index) => {    
            return (
              <Card 
                onClick={() =>{setTicket(x[0].sac_sac_ticket)}}
                key={x[0].sac_sac_ticket}
                sx={{
                  height: '5vh',
                  width: '22vw',
                  position: 'absolute',
                  ml: "1vw",
                  fontFamily:"Arial",
                  zIndex: 1,
                  mt: `${index * 7}vh`,
                  cursor: 'pointer',
                  "&:hover": {
                    backgroundColor: "rgb(50, 50, 50)",
                    color: "rgb(135, 176, 153)"
                  },
                }}
              > 
                {x[0].sacmen_texto}
              </Card>
            );
             
          })

        ):(null)}
        
       
      </Box>
    </>
  );
}

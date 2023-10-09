import { BrowserRouter as Brouter, Routes as RouteContainer, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Adm } from "./Pages/AdmLogin";
import React from "react";
import { AdmHome } from "./Pages/AdmHome";
import { Enterprise } from "./Pages/AdmEmpresas";
import { Sac } from "./Pages/Sac";
import ModalContext  from "./context/modalcontext";
import { useState } from "react";

export function Routes() {
    const [Ticket, setTicket] = useState('');
    const [verify, setVerify] = useState(false);
    return(<>
        <Brouter>
        {/*login*/}
            <RouteContainer>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/adm" element={<Adm/>}></Route>
            </RouteContainer>
        {/*home*/}
        <ModalContext.Provider value={{
                    verify,
                    Ticket,
                    setTicket
            }}>
            <React.Fragment>
            <RouteContainer>

                <Route path="/admhome" element={<AdmHome/>}></Route>
                <Route path="Sistema/empresas" element={<Enterprise/>}></Route>
                <Route path="Sistema/SAC" element={<Sac/>}></Route>
            
            </RouteContainer>
            </React.Fragment>
        </ModalContext.Provider>
        </Brouter>
    </>)
}
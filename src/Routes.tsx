import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { AdmHome } from "./Pages/AdmHome";
import { Enterprise } from "./Pages/AdmEmpresas";
import { Sac } from "./Pages/Sac";
import ModalContext from "./context/Modalcontext";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, {Suspense, useState } from "react";
import Loading from "./components/bases/loading/loading";

function Rotas() {
    const [Ticket, setTicket] = useState('');
    const [hasEntered, setHasEntered] = useState(false);
    const dark = localStorage.getItem('theme')
    const [verify, setVerify] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [admData, setAdmData] = useState<Array<object> | null>(null);
    const themes = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
    });
    const fundo = themes.palette.background.default;

    function checkDevice() {
        if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
        ) {
            return true; // está utilizando celular
        }
        else {
            return false; // não é celular
        }
    }
    console.log(checkDevice());

    React.useEffect(() => {
        const themes = localStorage.getItem('theme');
        setDarkMode(themes === 'dark');
    }, []);



    React.useEffect(() => {
        

        if (dark == 'dark') {
            setVerify(true)
        } else {
            setVerify(false)
        }
    }, [dark])

    React.useEffect(() => {
        setHasEntered(true);
    }, []);


    return (
        <ThemeProvider theme={themes}>

            <BrowserRouter>
                <Suspense fallback={<Loading />}>
                    <Routes>

                        {/* Rotas públicas */}
                        <Route path="/*" element={
                            <React.Fragment>
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                </Routes>
                            </React.Fragment>
                        } />


                        {/* Rota do sistema */}
                        <Route path="/Sistema/*" element={
                            <ModalContext.Provider value={{
                                verify,
                                themes, // ou o tema que você desejar usar
                                hasEntered,
                                setHasEntered,
                                admData,
                                setAdmData,
                                Ticket,
                                setTicket,
                                fundo
                            }}>
                                <React.Fragment>
                                    <Routes>
                                        <Route path="/" element={<AdmHome />} />
                                        <Route path="/Empresas" element={<Enterprise />} />
                                        <Route path="/SAC" element={<Sac />} />
                                    </Routes>
                                </React.Fragment>
                            </ModalContext.Provider>
                        } />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </ThemeProvider>
    );

};


export { Rotas };
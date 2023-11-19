import { createContext } from 'react';

interface ModalContextType {
    verify: boolean;
    themes: any; 
    hasEntered: boolean;
    setHasEntered: (hasEntered: boolean) => void;
    admData: any;
    setAdmData: (admData: any) => void;
    Ticket?: any;
    setTicket?: (ticket: any) => void;
    fundo?: any;
    setAdmMsg: (admMsg: any) => void;
    Msg?: any;
}

const ModalContext = createContext<ModalContextType>({
    verify: false,
    themes: '',
    hasEntered: false,
    setHasEntered: () => {},
    admData: null, 
    setAdmData: () => {},
    Ticket: null, 
    setTicket: () => {},
    fundo: null,
    setAdmMsg: () => {},
    Msg: null, 
});

export default ModalContext;

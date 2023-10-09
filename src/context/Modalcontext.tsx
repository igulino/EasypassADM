import { createContext } from 'react';

interface ModalContextType {
    verify: boolean;
    
    Ticket?: any;
    setTicket?: (Ticket: any) => void;
    
}
const throwNotImplementedError = () => {
    console.log('a');
    
};

const ModalContext = createContext<ModalContextType>({
    verify: false,
 
    Ticket: '',
    setTicket: () =>{}
    
});

export default ModalContext;

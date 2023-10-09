import { createContext } from 'react';

interface ModalContextType {
    verify: boolean;
    
    Ticket?: any;
    setTicket?: (Ticket: any) => void;
    
}
const throwNotImplementedError = () => {
    throw new Error('Function not implemented');
};

const ModalContext = createContext<ModalContextType>({
    verify: false,
 
    Ticket: {},
    setTicket: throwNotImplementedError,
    
});

export default ModalContext;

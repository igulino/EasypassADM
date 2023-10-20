import React from 'react'
import ReactDOM from 'react-dom/client'
import { Rotas } from "./Routes.tsx";
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Rotas />
    </Provider>
    
  </React.StrictMode>,
)

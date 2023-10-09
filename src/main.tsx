import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from "./Routes.tsx";
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
    
  </React.StrictMode>,
)

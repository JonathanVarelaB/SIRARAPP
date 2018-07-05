// REACT
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// PWA
import registerServiceWorker from './registerServiceWorker';
// ESTILOS
import './estilos/iconos/fontawesome-all.css';
import './estilos/main.scss';
// COMPONENTES
import App from './app';

ReactDOM.render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>), 
    document.getElementById('root'));

registerServiceWorker();

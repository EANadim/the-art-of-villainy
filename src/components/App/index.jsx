import React from 'react';
import './index.css';
import Header from '../../Layout/header';
import Footer from '../../Layout/footer';
import Routes from '../../Routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes />
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
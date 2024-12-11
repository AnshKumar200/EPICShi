import React from 'react';
import Navbar from './components/navbar/Navbar';
import Card from './components/Card';
import Header from './components/Header';
import Footer from './components/Footer';
import Heading from './components/Heading';
import './App.css';

function App() {
    return (
        <div>
            <div className='navbar'>
                <Navbar />
            </div>
            <Header />
            <Heading />
            <Card />
            <Footer />
        </div>
    );
}

export default App;

import React from 'react';
import './styles/App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Panel } from './components/Panel/Panel';

const App = () => {
    return (
        <div className='App'>
            <h1 className='App__title'>Pomodoro Timer App</h1>
            <Navbar />
            <Panel />
        </div>
    )
}

export default App;
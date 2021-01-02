import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './components/Child'
import { toEditorSettings } from 'typescript';

const App: React.FC = () => {
    // const [ count, setCount ] = useState<number>(0)

    // const handleIncrement = () => {
    //     setCount(count + 1)
    // }

    // const handleDecrement = () => {
    //     setCount(count - 1)
    // }

    const [ message, setMessage ] = useState<string>('')

    const handleMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    }
    
    return (
        <div className="App">
            <p className="title" >{ message }</p>
            <input type="text" value={message} onChange={handleMessage} />
        </div>
    );
}

export default App;

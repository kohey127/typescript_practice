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

    // const [ message, setMessage ] = useState<string>('')

    // const handleMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setMessage(e.target.value)
    // }

    const [ blue, setBlue ] = useState(false)
    
    return (
        <div className="App">
            <p className={`
                title
                ${ blue ? 'is-blue' : '' }
            `}
            onClick={() => setBlue(!blue)}
            >React スタイル設定</p>
        </div>
    );
}

export default App;

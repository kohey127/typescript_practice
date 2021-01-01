import React from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './components/Child'

function App() {
    return (
        <div className="App">
            <Child message="子コンポーネントに渡す">
                <h1>チルドレンで表示</h1>
            </Child>
        </div>
    );
}

export default App;

import { useState } from 'react'
import { Header } from './components/Header'
import { Timer } from './components/Timer'
import { Button } from './components/Button'
import './assets/styles/base.css'



function App() {
    const [ms, setMs] = useState<number>(0)

    return (
        <div className="App">
            <Header/>
            <Timer ms={ms}/>
            <Button setMiliseconds={setMs} ms={ms}/>
        </div>
    );
}

export default App;

import {useState} from 'react'
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Cards from "./components/Cards";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Navbar/>
            <Cards/>
        </>
    )
}

export default App

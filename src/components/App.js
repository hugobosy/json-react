import './App.css';
import {useEffect, useState} from "react";
import {Word} from "./Word";

function App() {

    function loadWords() {
        fetch('data/words.json')
            .then(res => res.json())
            .then(data => {
                setWords(data.words)
                setLoaded(true)
            })
    }

    function isLoaded () {
        setTimeout(loadWords, 3000)
    }
    const [words, setWords] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(()=> {isLoaded()}, [])

    const listWords = words.map(word => <Word key={word.id} pl={word.pl} en={word.en}/>)
    return (
        <div className="App">
            {loaded ? listWords : "Wczytuję dane"}
        </div>
    );
}

export default App;

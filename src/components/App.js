import './App.css';
import {useEffect, useState} from "react";
import {Word} from "./Word";

function App() {

    function loadWords() {
        fetch('data/words.json')
            .then(res => res.json())
            .then(data => setWords(data.words))
    }

    const [words, setWords] = useState([])

    useEffect(()=> {loadWords()}, [])

    const listWords = words.map(word => <Word key={word.id} pl={word.pl} en={word.en}/>)
    return (
        <div className="App">
            {listWords}
        </div>
    );
}

export default App;

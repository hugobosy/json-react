import './App.css';
import {useState} from "react";

function App() {
    const words = [
        {
            "id": 1,
            "en": "cat",
            "pl": "kot"
        },
        {
            "id": 2,
            "en": "dog",
            "pl": "pies"
        },
        {
            "id": 3,
            "en": "fish",
            "pl": "ryba"
        }
    ];

    const [word, setWord] = useState(words.map(word => <p>{word.en} -> {word.pl}</p>))

    return (
        <div className="App">
            {word}
        </div>
    );
}

export default App;

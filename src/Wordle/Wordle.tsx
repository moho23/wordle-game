import "./wordle.scss"
import {useState} from "react";
import GuessRow from "../components/guessRow/GuessRow";
import {observer, useLocalObservable} from "mobx-react-lite";
import GameStore from "../store/GameStore"

export default observer(function Wordle() {
    const store = useLocalObservable(() => GameStore)

    const [word, setWord] = useState("RAISE")
    const [guess, setGuess] = useState("")

    return (
        <div className="wordle-main">
            <h1>WORDLE</h1>
            <div className="game-board">
                {
                    [...Array(6)].map((_, j) => (
                        <GuessRow key={j} word={"abcde"} isGuessed={true} guessPhrase={"gfcez"}/>
                    ))
                }
            </div>
            <h2>Alphabet Virtual Keyboard</h2>
        </div>
    )
})


import "./wordle.scss"
import {useEffect, useState} from "react";
import GuessRow from "../components/guessRow/GuessRow";
import {observer, useLocalObservable} from "mobx-react-lite";
import GameStore from "../store/GameStore"

export default observer(function Wordle() {
    const store = useLocalObservable(() => GameStore)

    useEffect(() => {
        //initial store
        store.initialize()
        //create event listener to detect what users type
        window.addEventListener("keyup", store.handleKeyUp)

        //clean event listener
        return () => {
            window.removeEventListener('keyup', store.handleKeyUp)
        }
    }, [])

    const [word, setWord] = useState("RAISE")
    const [guess, setGuess] = useState("")

    return (
        <div className="wordle-main">
            <h1>WORDLE </h1>
            <div className="game-board">
                {
                    store.guessesList.map((_, j) => (
                        <GuessRow key={j} word={store.mainWord} isGuessed={j < store.attemptCounter}
                                  guessPhrase={store.guessesList[j]}/>
                    ))
                }
            </div>
            {store.isWon && <h3 className="mb">you win!</h3>}
            {store.isLost && <h3 className="mb">you lost!</h3>}
            {/*<h2>Alphabet Virtual Keyboard</h2>*/}
            <h3 className="mb">chosen word: {store.mainWord}</h3>
            {(store.isWon || store.isLost) &&
            <button className="mb reset-btn" onClick={() => store.initialize()}>reset game</button>}
        </div>
    )
})


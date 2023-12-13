import React from "react";
import "./GuessRow.scss"
import {GuessRowI} from "../../interface/index";

function GuessRow(props: GuessRowI) {

    return (
        <div className="guess-row-main">
            {
                [...Array(5)].map((_, i) => (
                        <div
                            className={`item ${!props.isGuessed ? "black" : props.word[i] === props.guessPhrase[i] ? "green" : props.word.includes(props.guessPhrase[i]) ? "yellow" : "black"}`}
                            key={i}>
                            {props.guessPhrase[i]}
                        </div>
                    )
                )
            }
        </div>
    );
}

export default GuessRow

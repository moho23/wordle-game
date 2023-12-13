import React from "react";
import "./GuessRow.scss"
import {GuessRowI} from "../../interface/index";

function GuessRow(props: GuessRowI) {

    return (
        <div className="guess-row-main">
            {
                [...Array(5)].map((_, key) => (
                        <div
                            className={`item ${!props.isGuessed ? "black" : props.word[key] === props.guessPhrase[key] ? "green" : props.word.includes(props.guessPhrase[key]) ? "yellow" : "black"}`}
                            key={key}>{props.guessPhrase[key]}
                        </div>
                    )
                )
            }
        </div>
    );
}

export default GuessRow

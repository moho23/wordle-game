import "./Keyboard.scss"
import {observer} from "mobx-react-lite";

export default observer(function Keyboard({store}) {
    return (
        <div className="keyboard-main">
            {
                ["qwertyuiop", "asdfghjkl", "zxcvbnm"].map((item: string, i: number) => (
                    <div key={i} className="row">
                        {
                            item.split('').map((alphabet: string, index: number) => (
                                <div
                                    className={`alph-item ${store.hasMatch.includes(alphabet) ? 'green' : store.hasNoMatch.includes(alphabet) ? 'yellow' : store.allGuesses.includes(alphabet) ? 'black1' : 'black2'
                                    }`} key={index}>{alphabet}</div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
})
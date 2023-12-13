import '../src/utilities/styles/index.scss';
import {ToastContainer} from "react-toastify";
import Wordle from "./Wordle/Wordle";


function App() {
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                style={{zIndex: 1000000000000}}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Wordle/>
        </>
    )
}

export default App

import { useNavigate } from "react-router-dom";


const WinnerScreen = ({playerTurn}) => {

    const navigate = useNavigate();

    return(
        <div>
            <h1>Player {(playerTurn + 1)} Wins!</h1>
            <h1>Click to Play Again</h1>
            <a></a>
            <a>
                <img onClick={() => { navigate("/StartScreen") }} src='https://github.com/larswan/Guess-Who/blob/main/guessWho/pokeball%20icon.png?raw=true' className="logo" alt="Start game" />
            </a>
        </div>

    )
}

export default WinnerScreen
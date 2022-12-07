import { useNavigate } from "react-router-dom";


const WinnerScreen = ({playerTurn, guessedCard}) => {

    const navigate = useNavigate();

    if (guessedCard!=1) {
        navigate("/")
    }
    else {
        console.log(guessedCard)
        return(
            <div className="WinnerScreen">
                <div className="WinnerLeft">
                    <h1>Player {(playerTurn + 1)} Wins!</h1>
                    <img className="WinningCard" src={guessedCard.largeImage} />
                </div>
                <div className="WinnerRight">
                    <h1>Click to Play Again</h1>
                    <a></a>
                    <a>
                        <img onClick={() => { navigate("/StartScreen") }} src='https://github.com/larswan/Guess-Who/blob/main/guessWho/pokeball%20icon.png?raw=true' className="logo" alt="Start game" />
                    </a>
                </div>
            </div>

        )
    }
}

export default WinnerScreen
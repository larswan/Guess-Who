import { useNavigate } from "react-router-dom";


const WinnerScreen = ({playerTurn, guessedCard}) => {

    const navigate = useNavigate();

   
    return(
        <div className="WinnerScreen">
            <div className="WinnerLeft">
                <h1>It's {guessedCard.name}! Player {(playerTurn + 1)} Wins!</h1>
                <img className="WinningCard" src={guessedCard.image} />
            </div>
            <div className="WinnerRight">
                {/* <h1>Click to Play Again</h1> */}
                <a>
                    <img onClick={() => { navigate("/StartScreen") }} src='https://github.com/larswan/Guess-Who/blob/main/wreath.png?raw=true' className="logo" alt="Start game" />
                </a>
            </div>
        </div>

    )
}
export default WinnerScreen
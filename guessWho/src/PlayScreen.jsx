import GameBoard from './GameBoard'
import PlayerCard from './PlayerCard'
import Forms from './Forms'

{/* <TextField id="outlined-basic" label="Outlined" variant="outlined" />
<Button variant="contained">Hello World</Button>  */}

const PlayScreen = ({cards, playerTurn, setPlayerTurn, playerCard, setCards}) => {
    return(
        <div className="lowerPlayScreen">
            <h1>Player {playerTurn}'s turn</h1> 
            <GameBoard cards={cards} />
            <div className="lowerPlayScreen" >
                <PlayerCard card={playerCard} />
                <Forms playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} setCards={setCards} />
            </div>
        </div>   
    )
}

export default PlayScreen
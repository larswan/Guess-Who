import CardContainer from './CardContainer'

const GameBoard = ({cards, setGameCards}) => {
    return(
    <div >
        <CardContainer cards={cards} setGameCards={setGameCards} />
    </div>
    )
}

export default GameBoard
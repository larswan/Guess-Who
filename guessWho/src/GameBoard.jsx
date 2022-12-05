import CardContainer from './CardContainer'

const GameBoard = ({cards, setCards}) => {
    return(
    <div className = "CardContainer">
        <CardContainer cards={cards} setCards={setCards} />
    </div>
    )
}

export default GameBoard
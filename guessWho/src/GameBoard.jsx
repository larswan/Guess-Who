import CardContainer from './CardContainer'

const GameBoard = ({cards, setGameCards}) => {
    console.log(cards)

    return(
    <div >
        <CardContainer cards={cards} setGameCards={setGameCards} />
    </div>
    )
}

export default GameBoard
import Card from './Card'


function CardContainer({cards, setGameCards}) {
console.log(cards)

    return(
        <div className="CardContainer" >
            {
                cards.map((card)=>{
                    return (
                        <Card card={card} cards={cards} setGameCards={setGameCards} />
                    )
                })
            }
        </div>
    )
}

export default CardContainer
function PickCard({ card }) {
    const clickHandler = (card) => {
        return
        // ADD POST REQUEST to Add as player 1 or 2 card 
    }

    return (
        <div>
            <img onClick={() => { clickHandler(card) }} className="Card" src={card.images.large} />
        </div>
    )
}

export default PickCard
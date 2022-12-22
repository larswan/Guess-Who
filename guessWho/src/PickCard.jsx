import { useNavigate } from "react-router-dom";
import {useEffect } from "react"


function PickCard({ card, playerTurn, setPlayerTurn, setSecretCard}) {
    const navigate = useNavigate();

    const clickHandler = (card) => {
        if (playerTurn === 0){
            setSecretCard([card])
            setPlayerTurn(1)
        }
        else {
            setSecretCard((prev)=>{return [...prev, card]})
            navigate("/PlayScreen")}
        }

    return (
        <div className="CardDiv">
            <img onClick={() => { clickHandler(card) }} className="Card" src={card.image} />
            <div className="peopleNames">{card.name}</div>
        </div>
    )
}

export default PickCard


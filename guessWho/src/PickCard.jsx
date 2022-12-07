import { useNavigate } from "react-router-dom";
import {useEffect } from "react"


function PickCard({ card, playerTurn, setPlayerTurn, setP1Card, setP2Card }) {
    const navigate = useNavigate();
    console.log(card)

    const clickHandler = (card) => {
        if (playerTurn === 0){
            setP1Card(card)
            setPlayerTurn(1)
        }
        else {
            setP2Card(card)
            navigate("/PlayScreen")}
        }

    return (
        <div className="CardDiv">
            <img onClick={() => { clickHandler(card) }} className="Card" src={card.image} key={card.nationalPokedexNumbers}/>
        </div>
    )
}

export default PickCard
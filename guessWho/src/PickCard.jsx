import { useNavigate } from "react-router-dom";
import {useEffect } from "react"


function PickCard({ card, playerTurn, setPlayerTurn, setP1Card, setP2Card }) {
    const navigate = useNavigate();

    useEffect(()=>{
        setPlayerTurn(1)
    },[])


    const clickHandler = (card) => {
        if (playerTurn === 1){
            setP1Card(card)
            setPlayerTurn(2)
        }
        else {
            // Route to player1screen
            setP2Card(card)
            setPlayerTurn(1)
            navigate("/PlayScreen")}
        }

    return (
        <div className="CardDiv">
            <img onClick={() => { clickHandler(card) }} className="Card" src={card.images.large} key={card.nationalPokedexNumbers}/>
        </div>
    )
}

export default PickCard
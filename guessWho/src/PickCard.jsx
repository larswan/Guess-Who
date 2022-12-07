import { useNavigate } from "react-router-dom";
import {useEffect } from "react"


function PickCard({ card, playerTurn, setPlayerTurn, setP1Card, setP2Card }) {
    const navigate = useNavigate();

    useEffect(()=>{
        setPlayerTurn(0)
    },[])


    const clickHandler = (card) => {
        if (playerTurn === 0){
            setP1Card(card)
            setPlayerTurn(1)
        }
        else {
            // Route to player1screen
            setP2Card(card)
            setPlayerTurn(0)
            navigate("/PlayScreen")}
        }

    return (
        <div className="CardDiv">
            <img onClick={() => { clickHandler(card) }} className="Card" src={card.image} key={card.nationalPokedexNumbers}/>
        </div>
    )
}

export default PickCard
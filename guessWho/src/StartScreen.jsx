import './App.css'
import { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import PickCard from './PickCard'

// Components and data import
import { filteredCards } from './filteredCards'

//random number generator
function getRndInteger(min, max) {
    let rndmNum = Math.floor(Math.random() * (max - min)) + min;
    return rndmNum
}

function StartScreen({cards, setCards, playerTurn, setPlayerTurn, setP1Card, setP2Card}) {

    useEffect(() => {
        let i = 0
        let tempCards = []

        while (i < 24) {
            let rndmInt = getRndInteger(0, 69)
            let addPoke = filteredCards[rndmInt]

            if (!tempCards.includes(addPoke)) {
                tempCards.push(addPoke)
                i++
            }
        }
        
        let updatedCards = tempCards.map((x) => ({ ...x, "faceUp": true }))
        setCards(updatedCards)
        
        // Post Request
        // const postRequest = () => {
        //     let res = fetch("http://localhost:3000/CardSets", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(updatedCards),
        //     }
        //     )
        //     console.log(res.ok)
        // }
        // postRequest()
    }, [])
    
    return (
        <div className="App">
            <div>
                <h1>Player {playerTurn} choose your card:</h1> 
                {/* <a></a>
                <a >
                    <img src='https://github.com/larswan/Guess-Who/blob/main/guessWho/pokeball%20icon.png?raw=true' className="logo" alt="React logo" />
                </a> */}
            </div>
            <div className="CardContainer">
                {
                    cards.map((card) => {
                        return (
                            <PickCard card={card} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} setP1Card={setP1Card} setP2Card={setP2Card} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default StartScreen
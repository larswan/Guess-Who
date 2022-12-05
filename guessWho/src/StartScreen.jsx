import { useEffect, useState } from 'react'
import './App.css'

// Components and data import
import { filteredCards } from './filteredCards'

//random number generator
function getRndInteger(min, max) {
    let rndmNum = Math.floor(Math.random() * (max - min)) + min;
    return rndmNum
}

function StartScreen() {
    const [cards, setCards] = useState([])
    const [gameCards, setGameCards] = useState([])

    let i = 0
    function random24cards() {
        let rndmInt = getRndInteger(1, 67)
        // switch i to rndmInt and figure out how to check off prevState to avoid duplicates
        let addPoke = filteredCards[i]
        setCards((prev) => [...prev, addPoke])
    }

    useEffect(() => {
        while (i < 24) {
            random24cards()
            i++
        }
    }, [])

    useEffect(() => {
        let updatedCards = cards.map((x) => ({ ...x, "faceUp": true }))
        setGameCards(updatedCards)
        console.log(gameCards)
    }, [cards])

    return (
        <div className="App">
            <div>
                <a></a>
                <a href="https://reactjs.org" target="_blank">
                    <img src='https://github.com/larswan/Guess-Who/blob/main/guessWho/pokeball%20icon.png?raw=true' className="logo" alt="React logo" />
                </a>
            </div>
            <GameBoard cards={gameCards} setGameCards={setGameCards} />
            <div>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <Button variant="contained">Hello World</Button>

            </div>
        </div>
    )
}

export default StartScreen
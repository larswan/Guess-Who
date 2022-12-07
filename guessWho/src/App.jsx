import { useEffect, useState } from 'react'
// import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  useNavigate
} from "react-router-dom";

import PlayScreen from './PlayScreen'
import StartScreen from './StartScreen'
import WinnerScreen from './WinnerScreen'
import {placeholder24cards} from './placeholder24cards'

function App() {
  const [cards, setCards] = useState([])
  const [playerTurn, setPlayerTurn] = useState([1])
  const [p1Card, setP1Card] = useState({
    "id": "base1-1",
    "name": "Alakazam",
    "supertype": "Pokémon",
    "subtypes": [
      "Stage 2"
    ],
    "level": "42",
    "hp": "80",
    "types": [
      "Psychic"
    ],
    "evolvesFrom": "Kadabra",
    "abilities": [
      {
        "name": "Damage Swap",
        "text": "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon to another as long as you don't Knock Out that Pokémon. This power can't be used if Alakazam is Asleep, Confused, or Paralyzed.",
        "type": "Pokémon Power"
      }
    ],
    "attacks": [
      {
        "name": "Confuse Ray",
        "cost": [
          "Psychic",
          "Psychic",
          "Psychic"
        ],
        "convertedEnergyCost": 3,
        "damage": "30",
        "text": "Flip a coin. If heads, the Defending Pokémon is now Confused."
      }
    ],
    "weaknesses": [
      {
        "type": "Psychic",
        "value": "×2"
      }
    ],
    "retreatCost": [
      "Colorless",
      "Colorless",
      "Colorless"
    ],
    "convertedRetreatCost": 3,
    "number": "1",
    "artist": "Ken Sugimori",
    "rarity": "Rare Holo",
    "flavorText": "Its brain can outperform a supercomputer. Its intelligence quotient is said to be 5000.",
    "nationalPokedexNumbers": [
      65
    ],
    "legalities": {
      "unlimited": "Legal"
    },
    "images": {
      "small": "https://images.pokemontcg.io/base1/1.png",
      "large": "https://images.pokemontcg.io/base1/1_hires.png"
    }
  }
)
  const [p2Card, setP2Card] = useState({
    "id": "base1-2",
    "name": "Blastoise",
    "supertype": "Pokémon",
    "subtypes": [
      "Stage 2"
    ],
    "level": "52",
    "hp": "100",
    "types": [
      "Water"
    ],
    "evolvesFrom": "Wartortle",
    "abilities": [
      {
        "name": "Rain Dance",
        "text": "As often as you like during your turn (before your attack), you may attach 1 Water Energy card to 1 of your Water Pokémon. (This doesn't use up your 1 Energy card attachment for the turn.) This power can't be used if Blastoise is Asleep, Confused, or Paralyzed.",
        "type": "Pokémon Power"
      }
    ],
    "attacks": [
      {
        "name": "Hydro Pump",
        "cost": [
          "Water",
          "Water",
          "Water"
        ],
        "convertedEnergyCost": 3,
        "damage": "40+",
        "text": "Does 40 damage plus 10 more damage for each Water Energy attached to Blastoise but not used to pay for this attack's Energy cost. Extra Water Energy after the 2nd doesn't count."
      }
    ],
    "weaknesses": [
      {
        "type": "Lightning",
        "value": "×2"
      }
    ],
    "retreatCost": [
      "Colorless",
      "Colorless",
      "Colorless"
    ],
    "convertedRetreatCost": 3,
    "number": "2",
    "artist": "Ken Sugimori",
    "rarity": "Rare Holo",
    "flavorText": "A brutal Pokémon with pressurized water jets on its shell. They are used for high-speed tackles.",
    "nationalPokedexNumbers": [
      9
    ],
    "legalities": {
      "unlimited": "Legal"
    },
    "images": {
      "small": "https://images.pokemontcg.io/base1/2.png",
      "large": "https://images.pokemontcg.io/base1/2_hires.png"
    }})

  const [p1CardSet, setP1CardSet] = useState([])
  const [p2CardSet, setP2CardSet] = useState([])
  const [playerCard, setPlayerCard] = useState({})
  const [displayCards, setDisplayCards] = useState([])
  const [guessMode, setGuessMode] = useState(false)
  const [guessedCard, setGuessedCard] = useState({})
  const [cardToGuess, setCardToGuess] = useState({})

  useEffect(()=>{
    setP1CardSet(cards)
    setP2CardSet(cards)
  },[cards])

  // player turn effects
  useEffect(()=>{
   if(playerTurn==1){
     document.body.style.backgroundColor = "#ab2c2c"
     setDisplayCards(p1CardSet)
     setCardToGuess(p2Card)
     setPlayerCard(p1Card)
    }
    else{
     document.body.style.backgroundColor =  "#2c37ab"
     setDisplayCards(p2CardSet)
     setCardToGuess(p1Card)
     setPlayerCard(p2Card)
   }
  },[playerTurn])
  
  const Home = () => {
    const navigate = useNavigate() 

    useEffect(()=>{
      setPlayerTurn(1)
    },[])
    
    return (
      <div>
        <h1>Click to Start Game</h1>
        <a></a>
        <a>
          <img onClick={() => { navigate("/StartScreen") }} src='https://github.com/larswan/Guess-Who/blob/main/guessWho/pokeball%20icon.png?raw=true' className="logo" alt="Start game" />
        </a>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/StartScreen", 
      element: <StartScreen cards={cards} setCards={setCards} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} setP1Card={setP1Card} setP2Card={setP2Card}  />,
    },
    {
      path: "/PlayScreen", 
      element: <PlayScreen cards={displayCards} setCards={playerTurn == 1 ? setP1CardSet : setP2CardSet} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} playerCard={playerCard} cardToGuess={cardToGuess} guessMode={guessMode} setGuessMode={setGuessMode} guessedCard={guessedCard} setGuessedCard={setGuessedCard}/>,
    },
    {
      path: "/WinnerScreen", 
      element: <WinnerScreen guessedCard={guessedCard} playerTurn={playerTurn} />,
    },
  ])
  
  return (
    <div  className="App">
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App

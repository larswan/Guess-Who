import { useState, useEffect } from 'react'
import GuessCard from './GuessCard'


const Forms = ({setPlayerTurn, playerTurn, cardToGuess, guessMode, setGuessMode, guessedCard}) => {
    const [formStep, setFormStep] = useState('player1Question')
    const [p1q, setp1q] = useState('')
    const [p2q, setp2q] = useState('')
    const [p1r, setp1r] = useState('')
    const [p2r, setp2r] = useState('')
    const [oldP1Q, setOldP1Q] = useState('')
    const [oldP2Q, setOldP2Q] = useState('')

    // Adding question marks to questions that dont have them
    useEffect(()=>{
    const questionMarkAdder = (string) => {
        
        if(string.slice(-1)=="?" || string == ''){
            return
        }
        else {
            let tempString = `${string}?`
            console.log(tempString)
            setOldP1Q(tempString)        }
        
    } 
    questionMarkAdder(oldP1Q)

    },[oldP1Q])

    useEffect(() => {
            const questionMarkAdder = (string) => {
                if (string.slice(-1) == "?" || string == '') {
                    return
                }
                else {
                    let tempString = `${string}?`
                    console.log(tempString)
                    setOldP2Q(tempString)
                }
            }
            questionMarkAdder(oldP2Q)
    }, [oldP2Q])

    // not needed
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("it submitted")
    }

    
    const p1QdumbFunction= ()=>{
        setOldP1Q(p1q); 
        setFormStep('player2Response'); 
        setPlayerTurn(1)
    }
    
    const p2QdumbFunction= ()=>{
        setOldP2Q(p2q);  
        setFormStep('player1Response'); 
        setPlayerTurn(0)
    }

    return (
        <div className="FormContainerDiv">
            <form className="input" onSubmit={handleSubmit}>
                {
                    formStep === "player1Response" && <div>
                        {oldP2Q == '' ? setFormStep('player1Question') : <h3>{oldP2Q}</h3>}
                        <input id="player1Response" className="input" onChange={(e) => { setp1r(e.target.value); console.log(p1r) }} type="textarea" placeholder="Yes or No" name="player1Response" /> <br />
                        <button  className="input" onClick={() => { p1r==''? alert("Please answer player 2's question") : setFormStep('player1Question')}}> Next </button>
                    </div>
                }
                {
                    formStep === "player1Question" && <div>
                        {oldP1Q == '' ? <a></a> : <h1>{oldP1Q} "{p2r}"</h1>}
                        <h3>Enter a yes or no question OR click Guess Card</h3><p><small>..don't forget to flip over your cards</small></p>
                        <input id="player1Question" onChange={(e) => { setp1q(e.target.value); console.log(p1q) }} type='textarea' placeholder="What is your question?" name="player1question" className="input" /> <br />
                        <button  className="input" onClick={() => {p1q=='' ? alert("Please write a question") : p1QdumbFunction()}}> Next </button>
                    </div>
                }
                
                {
                    formStep === "player2Response" && <div>
                        {oldP1Q == '' ? setFormStep("player2Question") : <h3>{oldP1Q}</h3>}
                        <input id="player2Response" className="input" onChange={(e) => { setp2r(e.target.value); console.log(p2r) }} type="textarea" placeholder="Yes or No" name="player2Response" /> <br />
                        <button className="input" type="submit" onClick={() => { p2r == '' ? alert("Please answer player 1's question") : setFormStep('player2Question')}}> Next </button>
                    </div>
                }
                {
                    formStep === "player2Question" && <div>
                        {p2q == '' ? <a></a> : <h1>{oldP2Q}<br/>{p1r}</h1>}
                        <h3>P2: Enter a yes or no question OR click Guess Card</h3><p><small>..don't forget to flip over your cards</small></p>
                        <input  id="player2Question" onChange={(e) => { setp2q(e.target.value); console.log(p2q) }} type='textarea' placeholder="What is your question?" name="player2question" className="input" /> <br />
                        <button  className="input" type="submit" onClick={() => { p2q == '' ? alert("Please write a question") : p2QdumbFunction() }}> Next </button>
                    </div>
                }
            </form>
            <div >
                <GuessCard setp1r={setp1r} setp2r={setp2r} setOldP1Q={setOldP1Q} setOldP2Q={setOldP2Q} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} cardToGuess={cardToGuess} guessMode={guessMode} setGuessMode={setGuessMode} formStep={formStep} setFormStep={setFormStep} guessedCard={guessedCard} />
            </div>
        </div>
    )
}

export default Forms
function p2Question({ p2q, setp2q}) {
    return (
        <div>
            {oldP2Q == '' ? <a></a> : <h1>{oldP2Q}<br />{p1r}</h1>}
            <h3>Player 2 Enter Your Question</h3>
            <input id="p2Question" onChange={(e) => { setp2q(e.target.value); console.log(p2q) }} type='textarea' placeholder="What is your question?" name="p2Question" className="input" /> <br />
        </div>
    )
}
export default p2Question
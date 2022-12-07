function p1Question({ p1q, setp1q }) {
    return (
        <div>
            {oldP1Q == '' ? <a></a> : <h1>{oldP1Q}<br />{p2r}</h1>}
            <h3>Player 1 Enter Your Question</h3>
            <input required id="p1Question" onChange={(e) => { setp1q(e.target.value) }} type='text' placeholder="What is your question?" value={p1q} className="input" /> <br />
        </div>
    )
}

export default p1Question
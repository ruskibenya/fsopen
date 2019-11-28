import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
    <button onClick={()=>props.handleClick()}>
        {props.text}
    </button>
)


const Header = props => <h2>{props.value}</h2>

const Display = props => <div>{props.value}</div>


const RenderVotes = props => <div>has {props.votes || 0} votes</div>

const App = (props) => {
    // save clicks of each button to own state
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState({})

    const randomAnecdote = () =>  {
        setSelected(selected + 1 > 5 ? 0 : selected + 1)
    }

    const upvote = () => {
        const newVote = (votes[selected] || 0) + 1
        const newVotes = {...votes}
        newVotes[selected] = newVote
        setVotes(newVotes)
    }

    const getKey = (obj,val) => Object.keys(obj).find(key => obj[key] === val);

    const getHighestVote = () =>   Math.max(...Object.values(votes)) < 1 ? 0 : Math.max(...Object.values(votes)) 

    const getKeyByHighestVote = () =>  getKey(votes, getHighestVote())
    

    return (
        <div>
            <Header value="Anecdote of the day" />
            <Display value={props.anecdotes[selected]}></Display>
            <RenderVotes votes= {votes[selected]}/>
            <Button handleClick={randomAnecdote} text="next anecdote" />
            <Button handleClick={upvote} text="vote"/>
            <br></br>
            <Header value="Anecdote with most votes" />
            <Display value={props.anecdotes[getKeyByHighestVote()]}></Display>
            <RenderVotes votes= {getHighestVote()}/>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)
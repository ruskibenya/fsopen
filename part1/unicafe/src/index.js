import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
    <button onClick={()=>props.handleClick()}>
        {props.text}
    </button>
)


const Header = props => <h2>{props.value}</h2>

const Display = props => <div>{props.value}</div>

const Statistic = props => <div>{props.name} {props.value}</div>

const Statistics = (props) => {
    if (props.all === 0) {
        return (
            <div>No feedback given</div>
        )
    }
    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <Statistic name="good" value={props.good} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Statistic name="neutral" value={props.neutral} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Statistic name="bad" value={props.bad} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Statistic name="all" value={props.good + props.neutral + props.bad} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Statistic name="average" value={(props.good - props.bad) / (props.good + props.neutral + props.bad)} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Statistic name="positive" value={((props.good) / (props.good + props.neutral + props.bad) * 100) + "%"} />
                    </td>
                </tr>
            </tbody>
        </table>
    )
}


const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)


    const increaseStateByOne = (state, setState) => {
        setState(state + 1)
    }


    

    return (
        <div>
            <Header value="give feedback" />
            <Button handleClick={()=>increaseStateByOne(good, setGood)} text="good" />
            <Button handleClick={()=>increaseStateByOne(neutral, setNeutral)} text="neutral" />
            <Button handleClick={()=>increaseStateByOne(bad, setBad)} text="bad" />
            <Header value="statistics" />
            <Statistics all={good + bad + neutral} good={good} neutral={neutral} bad={bad}></Statistics>
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

ReactDOM.render(<App />, 
    document.getElementById('root')
  )
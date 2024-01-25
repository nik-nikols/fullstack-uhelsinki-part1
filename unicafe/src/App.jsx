import { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Display = ({ text, count }) => {
  return (
    <div>{text} {count}</div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={ () => setGood(good + 1) } text="good" />
      <Button handleClick={ () => setNeutral(neutral + 1) } text="neutral" />
      <Button handleClick={ () => setBad(bad + 1) } text="bad" />

      <h2>statistics</h2>
      <Display text="good" count={good} />
      <Display text="neutral" count={neutral} />
      <Display text="bad" count={bad} />
      <Display text="all" count={good + neutral + bad} />
      <Display text="average" count={(good - bad)/(good + neutral + bad)} />
      <Display text="positive" count={good/(good + neutral + bad)*100+ '%'} />
    </div>
  )
}

export default App
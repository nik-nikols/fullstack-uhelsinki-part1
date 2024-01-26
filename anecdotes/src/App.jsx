import { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const ShowAnecdote = ({anecdote, votes}) => {
  return (
    <>
    <p>{anecdote}</p>
    <p>has {votes} votes</p>
    </>
  )
}

const ShowMostPopular = ({anecdotes, votes}) => {
  const maxVotes = Math.max(...votes)
  const mostPopularIndex = votes.indexOf(maxVotes)
  const mostPopularAnecdote = mostPopularIndex >= 0 ? anecdotes[mostPopularIndex] : "";
  return (
    <ShowAnecdote anecdote={mostPopularAnecdote} votes={maxVotes} />
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const getRandomIndex = () => Math.floor(Math.random() * anecdotes.length);
  const votesArray = new Array(anecdotes.length);
  votesArray.fill(0);
  const [selected, setSelected] = useState(getRandomIndex());
  const [votes, setVotes] = useState(votesArray);

  const setRandomQuote = () => {
    let randomIndex = getRandomIndex();
    while (selected === randomIndex) {
      randomIndex = getRandomIndex();
    }
    setSelected(randomIndex);
  }

  const addVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <ShowAnecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button handleClick={addVote} text="vote" />
      <Button handleClick={setRandomQuote} text="next anecdote" />
      <h2>Anecdote with most votes</h2>
      <ShowMostPopular anecdotes={anecdotes} votes={votes} />
    </div>
  )
}

export default App
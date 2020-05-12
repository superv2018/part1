import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0));

  /* copy votes array to newArray */
  let newArray = [...vote];

  /* gets the max in the array */
  const maxVote = Math.max(...newArray)

  let mostVotedAnec = vote.indexOf(maxVote)
  console.log(mostVotedAnec)

  /* generate random quotes */
  const randomEventHandler = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const voteEventHandler = () => {
    newArray[selected] += 1;
    setVote(newArray);
    console.log(setVote);
  };

  return (
    <div>
      {/* vote[selected takes the value of the random array]*/}
      <h2>Anecdote of the day</h2>
      <p>{props.anecdotes[selected]}</p>
      <p>Has {vote[selected]} votes.</p>
      <Button onClick={voteEventHandler} text="Vote" />
      <Button onClick={randomEventHandler} text="Next anecdote" />
      <h2>Anecdote with most votes</h2>
  <p>{props.anecdotes[mostVotedAnec]}</p>
  <p>Has {maxVote} votes.</p>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(
  <React.StrictMode>
    <App anecdotes={anecdotes} />
  </React.StrictMode>,
  document.getElementById("root")
);

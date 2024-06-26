import { useGame } from "../context/context";

function Status({ wordToGuess }: any) {
  const {
    state: { status },
  } = useGame();
  return (
    <h1 className="title">
      {status === null
        ? "Welcome to Hangman."
        : status === "win"
        ? `You win! the answer is "${wordToGuess}"`
        : status === "in-game"
        ? "Playing"
        : status === "lost"
        ? `You lost! the answer is "${wordToGuess}"`
        : "hangman"}
    </h1>
  );
}

export default Status;

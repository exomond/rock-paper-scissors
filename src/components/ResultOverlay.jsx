import "./ResultOverlay.css"; // Make sure to create this CSS file

const ResultOverlay = ({ winner, onPlayAgain }) => {
  // Determine the message based on the winner
  const message = winner === "Computer" ? "Game Over" : "Congratulations";

  return (
    <div className="overlay">
      <div className="result-box">
        <h1>{message}</h1>
        <p>{winner} wins!</p>
        {/* Add a button to restart the game or navigate to another page if needed */}
        <button className="play-again-button" onClick={onPlayAgain}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default ResultOverlay;

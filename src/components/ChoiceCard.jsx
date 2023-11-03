import "./ChoiceCard.css";

const ChoiceCard = ({
  choice,
  choiceName,
  playerName,
  playerCity,
  record,
  onClick,
  result,
  isComputerChoice, // Add this new prop
}) => {
  // The button click handler
  const handleButtonClick = (e) => {
    e.stopPropagation(); // Stop the event from propagating
    e.preventDefault(); // prevent default browser behavior
    if (onClick) {
      onClick(choiceName);
    }
  };
  let boxShadowColor;
  if (result === "win") {
    boxShadowColor = "0 10px 3px 1px rgba(0, 255, 0, 0.9)"; // Green for win
  } else if (result === "loss") {
    boxShadowColor = "0 10px 4px 1px rgba(255, 3, 3, 0.911)"; // Red for loss
  } else if (result === "tie") {
    boxShadowColor = "0 10px 4px 1px rgb(255, 230, 0)"; // yellow for tie
  } else {
    boxShadowColor = "none"; // Default, no box-shadow
  }

  // Additional style for highlighting computer's choice
  const computerChoiceStyle = {
    border: isComputerChoice ? "3px solid #f39c12" : "", // Highlight with a border
    transform: isComputerChoice ? "scale(1.1)" : "", // Scale up the card a bit
    transition: "transform 0.3s ease", // Smooth transition for scaling effect
  };
  // Apply dynamic styles to the card
  const cardStyle = {
    boxShadow: boxShadowColor,
    ...computerChoiceStyle, // Spread the computerChoiceStyle here

    // ... other styles if necessary
  };

  return (
    <div className={`choice-card ${isComputerChoice ? 'computer-choice' : ''}`} style={cardStyle}>
      <div className="choice-image">
        <img src={choice} alt={choiceName} />{" "}
        {/* alt should be dynamic based on choiceName */}
      </div>
      <div className="choice-name">{playerName}</div>
      <div className="choice-city">{playerCity}</div>
      <div className="game-record">
        <span className="win">Wins: {record.wins}</span> |
        <span className="lose"> Losses: {record.losses}</span> |
        <span className="tie"> Ties: {record.ties}</span>
      </div>
      <hr />
      {/* Add a button here */}
      {onClick && (
        <button className="choose-button" onClick={handleButtonClick}>
          Choose
        </button>
      )}
    </div>
  );
};

export default ChoiceCard;

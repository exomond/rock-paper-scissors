import ChoiceCard from "./ChoiceCard.jsx";
import "./GameChoices.css"; // Make sure to create a corresponding CSS file for styling
import paperImage from "../assets/paper.png";
import rockImage from "../assets/rock.png";
import scissorsImage from "../assets/scissors.png";

const GameChoices = ({ playerName, playerCity }) => {
  // Define gameRecords inside the component
  const gameRecords = {
    rock: { wins: 0, losses: 0, ties: 0 },
    paper: { wins: 0, losses: 0, ties: 0 },
    scissors: { wins: 0, losses: 0, ties: 0 },
  };

  // Define a separate set of records for the computer
  const computerRecords = {
    rock: { wins: 0, losses: 0, ties: 0 },
    paper: { wins: 0, losses: 0, ties: 0 },
    scissors: { wins: 0, losses: 0, ties: 0 },
  };

  // Calculate total wins for the user and computer
  const totalUserWins = Object.values(gameRecords).reduce(
    (total, record) => total + record.wins,
    0
  );
  const totalComputerWins = Object.values(computerRecords).reduce(
    (total, record) => total + record.wins,
    0
  );

  return (
    <div className="game-choices-container">
      <div className="player-cards">
        <ChoiceCard
          choice={rockImage}
          playerName={playerName}
          playerCity={playerCity}
          record={gameRecords.rock}
        />
        <ChoiceCard
          choice={paperImage}
          playerName={playerName}
          playerCity={playerCity}
          record={gameRecords.paper}
        />
        <ChoiceCard
          choice={scissorsImage}
          playerName={playerName}
          playerCity={playerCity}
          record={gameRecords.scissors}
        />
      </div>

      {/* Summary Card */}
      <div className="summary-card">
        <div className="user-score">
          {playerName}'s Total Wins: {totalUserWins}
        </div>
        <div className="computer-score">
          Computer's Total Wins: {totalComputerWins}
        </div>
      </div>

      <div className="computer-cards">
        <ChoiceCard
          choice={rockImage}
          playerName="Computer"
          playerCity="Tech"
          record={computerRecords.rock}
        />
        <ChoiceCard
          choice={paperImage}
          playerName="Computer"
          playerCity="Tech"
          record={computerRecords.paper}
        />
        <ChoiceCard
          choice={scissorsImage}
          playerName="Computer"
          playerCity="Tech"
          record={computerRecords.scissors}
        />
      </div>
    </div>
  );
};

export default GameChoices;

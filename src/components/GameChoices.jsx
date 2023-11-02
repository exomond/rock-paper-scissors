import ChoiceCard from "./ChoiceCard.jsx";
import "./GameChoices.css"; // Make sure to create a corresponding CSS file for styling
import paperImage from "../assets/paper.png";
import rockImage from "../assets/rock.png";
import scissorsImage from "../assets/scissors.png";
import { useState, useEffect } from "react";
import ResultOverlay from "./ResultOverlay.jsx";

const GameChoices = ({ playerName, playerCity }) => {
  // Define gameRecords inside the component
  const [gameRecords, setGameRecords] = useState({
    rock: { wins: 0, losses: 0, ties: 0 },
    paper: { wins: 0, losses: 0, ties: 0 },
    scissors: { wins: 0, losses: 0, ties: 0 },
  });
  const [computerRecords, setComputerRecords] = useState({
    rock: { wins: 0, losses: 0, ties: 0 },
    paper: { wins: 0, losses: 0, ties: 0 },
    scissors: { wins: 0, losses: 0, ties: 0 },
  });

  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  // Calculate total wins for the user and computer
  const totalUserWins = Object.values(gameRecords).reduce(
    (total, record) => total + record.wins,
    0
  );
  const totalComputerWins = Object.values(computerRecords).reduce(
    (total, record) => total + record.wins,
    0
  );

  // Check for game over condition
  useEffect(() => {
    const checkGameOver = () => {
      if (totalUserWins >= 5) {
        setTimeout(() => {
          setGameOver(true);
          setWinner(`${playerName}`);
        }, 500); // .5 second delay
      } else if (totalComputerWins >= 5) {
        setTimeout(() => {
          setGameOver(true);
          setWinner("Computer");
        }, 500); // .5 second delay
      }
    };
    checkGameOver();
    // Clean up the timeout when the component unmounts or the totals change
    return () => {
      clearTimeout(checkGameOver);
    };
  }, [totalUserWins, totalComputerWins, playerName]);

  // State to track the player's last choice
  const [playerLastChoice, setPlayerLastChoice] = useState(null);
  // State to track the last round result
  const [lastResult, setLastResult] = useState({ user: "", computer: "" });

  // Function to handle user's choice and computer's random choice
  const playGame = (userChoice) => {
    setPlayerLastChoice(userChoice); // Update the last choice
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    updateScores(userChoice, computerChoice);
  };

  // Function to compare choices and update scores
  const updateScores = (userChoice, computerChoice) => {
    const outcome = {
      rock: { scissors: "win", paper: "loss", rock: "tie" },
      paper: { rock: "win", scissors: "loss", paper: "tie" },
      scissors: { paper: "win", rock: "loss", scissors: "tie" },
    };

    const userResult = outcome[userChoice][computerChoice];
    const computerResult = outcome[computerChoice][userChoice];
    // This will be the inverse of the userResult

    // Set the last result based on this round
    setLastResult({ user: userResult, computer: computerResult });

    // Update user game records based on the result
    setGameRecords((prevRecords) => {
      const newRecords = { ...prevRecords };
      if (userResult === "win") {
        newRecords[userChoice].wins += 1;
      } else if (userResult === "loss") {
        newRecords[userChoice].losses += 1;
      } else if (userResult === "tie") {
        newRecords[userChoice].ties += 1;
      }
      return newRecords;
    });

    // Update computer game records based on the result
    setComputerRecords((prevRecords) => {
      const newRecords = { ...prevRecords };
      if (computerResult === "win") {
        newRecords[computerChoice].wins += 1;
      } else if (computerResult === "loss") {
        newRecords[computerChoice].losses += 1;
      } else if (computerResult === "tie") {
        // Normally we wouldn't need to update anything for a tie, but we're including it for completeness
        newRecords[computerChoice].ties += 1;
      }

      return newRecords;
    });
  };

  // Check for game over and return ResultOverlay if true
  if (gameOver) {
    return <ResultOverlay winner={winner} />;
  }
  return (
    <div className="game-choices-container">
      <div className="player-cards">
        <ChoiceCard
          choice={rockImage}
          choiceName="rock" // Added choiceName prop
          playerName={playerName}
          playerCity={playerCity}
          record={gameRecords.rock}
          onClick={() => playGame("rock")}
          result={playerLastChoice === "rock" ? lastResult.user : ""}
        />
        <ChoiceCard
          choice={paperImage}
          choiceName="paper" // Added choiceName prop
          playerName={playerName}
          playerCity={playerCity}
          record={gameRecords.paper}
          onClick={() => playGame("paper")}
          result={playerLastChoice === "paper" ? lastResult.user : ""}
        />
        <ChoiceCard
          choice={scissorsImage}
          choiceName="scissors" // Added choiceName prop
          playerName={playerName}
          playerCity={playerCity}
          record={gameRecords.scissors}
          onClick={() => playGame("scissors")}
          result={playerLastChoice === "scissors" ? lastResult.user : ""}
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

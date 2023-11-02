import { useState } from "react";
// import viteLogo from '/vite.svg'
import "./App.css";

import GameChoices from "./components/GameChoices.jsx";
import UserForm from "./components/UserForm.jsx";

function App() {
  const [userDetails, setUserDetails] = useState(null);

  const onSubmitUserInfo = ({ name, city }) => {
    setUserDetails({ name, city });
  };

  return (
    <div className="App">
      {!userDetails ? (
        <UserForm onSubmitUserInfo={onSubmitUserInfo} />
      ) : (
        <GameChoices
          playerName={userDetails.name}
          playerCity={userDetails.city}
        />
      )}
    </div>
  );
}

export default App;

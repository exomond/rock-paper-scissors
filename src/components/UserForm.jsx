import { useState } from "react";
import "./UserForm.css"; // Make sure to create a corresponding CSS file for styling

const UserForm = ({ onSubmitUserInfo }) => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitUserInfo({ name, city });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <button type="submit">Let's Go</button>
      </form>
    </div>
  );
};

export default UserForm;

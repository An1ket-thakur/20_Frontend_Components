import { useState } from "react";
import "./styles.css";
import User from "./user";
export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchGithubUserData = async (getUserName) => {
    setLoading(true);
    try {
      const res = await fetch(`https://api.github.com/users/${getUserName}`);
      const data = await res.json();
      if (data) {
        setUserData(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const handleSubmit = () => {
    if (userName.trim()) {
      fetchGithubUserData(userName);
    }
  };

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username..."
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
      {userData == null ? <div>No user found</div> : null}
    </div>
  );
}

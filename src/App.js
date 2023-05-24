import { useState } from "react";
import "./App.css";
import axios from "axios";
import User from "./User";
import Zoom from "react-reveal/Zoom";

function App() {
  const [user, setUser] = useState({});
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState(false);

  const handleSearch = async (e) => {
    setSearch(e.target.value);
  };

  const getUserData = async () => {
    try {
      const userData = await axios.get(
        `https://api.github.com/users/${search}`
      );
      setUser(userData.data);
      setStatus(true);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="App">
      <div className="app min-h-screen py-10 text-slate-100">
        <div className="search md:w-[80%] w-[40%] mx-auto p-6 rounded-xl bg-black bg-opacity-20">
          <p className="text-xl md:text-lg mb-3">Enter github username: </p>
          <div className="flex justify-between md:flex-col">
            <input
              className="w-[20vw] md:w-full md:mb-3 py-2 px-6 rounded-3xl outline-none bg-white bg-opacity-10"
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleSearch}
            />
            <button
              onClick={getUserData}
              className="py-2 px-6 rounded-3xl border-2 md:w-[30vw] md:mx-auto"
            >
              Search
            </button>
          </div>
        </div>

        <div className="data">
          {search == user.login && status && (
            <Zoom left>
              <User
                key={user.id}
                username={user.login}
                image={user.avatar_url}
                url={user.html_url}
                name={user.name}
                public_repos={user.public_repos}
                bio={user.bio}
                followers={user.followers}
              />
            </Zoom>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

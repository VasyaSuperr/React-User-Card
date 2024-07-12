import { useState } from "react";
import UserCard from "./components/UserCard";

const user = {
  firstName: "Emma",
  lastName: "Watson",
  hashtag: "@EmWatson",
  tweets: 1337,
  following: 561,
  followers: 718,
};

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <UserCard user={user} />
    </>
  );
}

export default App;

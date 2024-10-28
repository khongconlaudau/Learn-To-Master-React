import { useState, useEffect } from "react";

// * Updating Array
// const App = () => {
//   const [friends, setFriends] = useState(["Alex", "John"]);
//   const add = () => setFriends([...friends, "Mason"]);
//   const remove = () =>
//     setFriends(friends.filter((friend) => friend !== "John"));
//   const update = () => setFriends(friends.map((friend) =>
//     friend === "Alex" ?  "Alex Smith" : friend
//   ))
//   return (
//     <div>
//       <ul>
//         {friends.map((f) => (
//           <li key={Math.random()}>{f}</li>
//         ))}
//       </ul>
//       <button onClick={add}>Add Friend</button>
//       <button onClick={remove}>Remove Friend</button>
//       <button onClick={update}>Update One Friend</button>
//     </div>
//   );
// };

// * Updating Object

// const App = () => {
//   const [movie, setMovie] = useState([
//     {
//       title: "Equalizer 3",
//       rating: 4,
//     },
//     {
//       title: "Outer Bank",
//       rating: 10,
//     },
//   ]);

//   const change = () => setMovie({ ...movie, rating: 5 });
//   const changeTitle = () =>
//     setMovie(movie.map((m) => m.title === "Equalizer 3" ? {...m, title: "John Wick 4"} : m));
//   return (
//     <div>
//       {/* <h1>{movie.title}</h1>
//       <h1>{movie.rating}</h1> */}
//       <ul>
//         {movie.map((m) => (
//           <div key={Math.random()}>
//             <li key={Math.random() * 5}>{m.title}</li>
//             <li key={Math.random() * 10}>{m.rating}</li>
//           </div>
//         ))}
//       </ul>
//       <button onClick={change}>Change Rating</button>
//       <button onClick={changeTitle}>Change Title</button>
//     </div>
//   );
// };

// * Passing Function as Value
const App = () => {
  // Initialize state from localStorage or default to an empty string
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem("name");
    return savedName ? JSON.parse(savedName) : "";
  });

  // Update localStorage whenever the name changes
  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  });

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleClear = () => {
    setName("");
  };

  return (
    <div>
      <h1>Your Name: {name}</h1>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <button onClick={handleClear}>Clear Name</button>
    </div>
  );
};

export default App;

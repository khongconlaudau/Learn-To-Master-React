import { useState } from "react";

function Profile() {
  const [infor, setInfor] = useState({
    name: "",
    age: "",
  });
// The square brackets around name in [name]: value are used to dynamically set the property key in the infor object. In JavaScript, this is known as computed property names.

// Here's how it works in your code:

// When the event e triggers, e.target represents the HTML element that fired the event.
// The name and value are destructured from e.target, where name is the attribute of the element (e.g., an input field's name attribute), and value is its current value.
// Using [name]: value allows you to update a specific property of the infor object with a key corresponding to the name value from the event target, ensuring that only the relevant field in infor is updated.
  const handledEvent = (e) => {
    const { name, value } = e.target;
    setInfor({ ...infor, [name]: value });
  };
  return (
    <div>
      <h1>User Profile</h1>
      <form>
        <input
          type="text"
          name="name"
          value={infor.name}
          onChange={handledEvent}
        />
        <br />
        <input
          type="number"
          name="age"
          value={infor.age}
          onChange={handledEvent}
        />
      </form>
      <h1>User Information</h1>
      <ol>
        <li key="name">Name: {infor.name}</li>
        <li key="age">Age: {infor.age}</li>
      </ol>
    </div>
  );
}

export default Profile;

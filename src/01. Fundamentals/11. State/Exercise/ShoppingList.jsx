import { useState } from "react";

function ShoppingList() {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const getName = (event) => {
    setName(event.target.value.trim());
  };
  const getQuantity = (event) => {
    setQuantity(event.target.value.trim());
  };
  const add = (event) => {
    event.preventDefault();
    setList([...list, { name: name, quantity: parseInt(quantity) }]);
    setName("");
    setQuantity("");
  };
  return (
    <div>
      <h1>Shopping List</h1>
      <form onSubmit={add}>
        <input type="text" onChange={getName} value={name} />
        <br />
        <input type="number" onChange={getQuantity} value={quantity} />
        <br />
        <input type="submit" value="Add Item" />
        <ul>
          {list.map((item) => (
            <li key={Math.random()}>
              {item.name} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default ShoppingList;

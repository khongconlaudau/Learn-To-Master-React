import React from "react";
import Button from "./Button";

const App = () => {
  return (
    <Button
      label="clicked"
      onClick={() => console.log("Clicked")}
      disabled={false}
    />
  );
};

export default App;

import React, { useState } from 'react'

const Switcher = () => {
    const [sw, setSw] = useState(false);
  return (
    <div>
      {sw ? <div>Dark</div> : <div>Light</div>}
      <input type="text" key={sw ? "dark" : "light"}/>
      <button onClick={() => setSw(!sw)}>Switch</button>
    </div>
  );
}

export default Switcher
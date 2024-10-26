import React from 'react'
import Weather from './Weather';
import UserStatus from './UserStatus';
import Greeting from './Greeting';
const App = () => {
  return (
    <div>
      <h1>Conditional Rendering in React</h1>

      {/* Weather component */}
      <Weather temperature={10} />
      <Weather temperature={20} />
      <Weather temperature={30} />

      {/* UserStatus component */}
      <UserStatus loggedIn={true} />
      <UserStatus loggedIn={false} />

      {/* Greeting component */}
      <Greeting timeOfDay="morning" />
      <Greeting timeOfDay="afternoon" />
    </div>
  );
}

export default App;
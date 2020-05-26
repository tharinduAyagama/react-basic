import React from 'react';
import './App.css';

import Welcome from './componants/Welcome';
import Greeting from './componants/Greeting';
import Love from './componants/Love';
import Hate from './componants/Hate';
import Like from './componants/Like';
import Counter from './componants/Counter';
import Name from './componants/Name';

function App() {
  return (
    <div className="App">
      {/* basic functional and class components */}
      <Welcome />
      <Greeting />

      {/* using props with functional and cclass componnts */}
      <Love name = "mim" howMuch = "a little" />
      <Love name = "dolly" howMuch = "so much" />
      <Hate name = "mim" howMuch = "a little" />
      <Hate name = "dolly" howMuch = "so much" />

      {/* using state */}
      <Like />
      <Counter />

      {/* child parent */}
      <Name />
    </div>
  );
}

export default App;

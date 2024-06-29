import React, { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  const [view, setView] = useState('login');

  return (
    <div>
      {view === 'login' ? <Login setView={setView} /> : <Signup setView={setView} />}
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;

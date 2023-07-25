import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from './components/Layout';
import ProfilePage from './routes/ProfilePage';
import './App.css';
import RocketsPage from './routes/RocketsPage';
import { getRockets } from './Redux/rockets/RocketsSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<RocketsPage />} />
          <Route path="/Myprofile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

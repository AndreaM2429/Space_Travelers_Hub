import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ProfilePage from './routes/ProfilePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/Myprofile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

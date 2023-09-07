import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login';
import Layout from './layout/Layout';
import Register from './Pages/Register/Register';
import HomePage from './Pages/HomePage/HomePage';
import Create from './Pages/Events/Create';
function App() {
  const isLoggedIn = false;
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {!isLoggedIn ? (
          <Route index element={<Login />} />
        ) : (
          <Route index element={<HomePage />} />
        )}
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<Create />} />
      </Route>
    </Routes>
  );
}

export default App;

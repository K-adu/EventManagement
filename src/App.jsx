import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login';
import MaterialStepper from './Pages/Register/Stepper';
function App() {
  return (
    <Routes>
      <Route path="/" element={<MaterialStepper />} />
      <Route />
      <Route />
    </Routes>
  );
}

export default App;

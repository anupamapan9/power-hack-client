import { Routes, Route } from 'react-router-dom';
import './App.css';
import Billing from './Components/Billing/Billing';
import Header from './Components/Common/Header';
import RequireAuth from './Components/Common/RequireAuth';
import Login from './Components/Users/Login';
import Register from './Components/Users/Register';

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path='/' element={<RequireAuth> <Billing /></RequireAuth>}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </main>
  );
}

export default App;

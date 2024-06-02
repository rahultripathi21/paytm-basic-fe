import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";
import { SignUp } from './components/auth/signup';
import { SignIn } from './components/auth/signin';
import { Dashboard } from './components/wallet/dashboard';
import { Transfer } from './components/wallet/transfer';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<Transfer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import './App.css'
import PaymentList from './components/Payment'
import FormApplication from './components/Forms'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';
function App() {

  return (
      <Router>
      <Navbar />
      <div className="pt-20 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<ProtectedRoute><FormApplication /></ProtectedRoute> } />
           <Route path="/payment" element={<PaymentList />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

import './App.css'
import FormApplication from './components/Forms'
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FormList from './components/FormList';
import FormDetail from './components/FormDetail';
import FormsPage from './components/FormsPage';
import PaymentsPage from './components/PaymentsPage';
import PaymentDetail from './components/PaymentDetail';
import PaymentForm from './components/PaymentForm';
import PaymentList from './components/PaymentList';
// import ProtectedRoute from './components/ProtectedRoute';
function App() {

  return (
      <Router>
      <Navbar />
      <div className="pt-20 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<FormApplication /> } />
           <Route path="/form-list" element={<FormList />} />
           <Route path="/form-details" element={<FormDetail />} />
           <Route path="/form-page" element={<FormsPage />} />
           <Route path="/payment-list" element={<PaymentList />} />
           <Route path="/payments-page" element={<PaymentsPage />} />
           <Route path="/payment-detail" element={<PaymentDetail />} />
           <Route path="/payment" element={<PaymentForm />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

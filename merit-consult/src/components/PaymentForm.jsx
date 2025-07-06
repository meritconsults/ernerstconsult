import React, { use, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../hooks/Axiox';

function PaymentForm() {
  const [formData, setFormData] = useState({
    email: '',
    number: '',
    full_name: '',
    transaction_id: '',
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate(); // ✅ Correct single import

  const isFormComplete = Object.values(formData).every(val => val.trim() !== '');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if transaction_id is exactly 11 digits
    if (!/^\d{11}$/.test(formData.transaction_id)) {
      alert('Incorrect Transaction ID');
      return;
    }

    try {
      await axiosInstance.post('/payments/payment/', formData);
      localStorage.setItem('hasPaid', 'true'); // ✅ Set flag
      navigate('/form'); // ✅ Navigate after success
    } catch (err) {
      setError('Failed to submit payment.');
      console.error(err);
    }
  };

  const [showPopup, setShowPopup] = useState(false);
  const payName = "Festus Kofi Nyarko";
  const mobileNumber = "0538134912";
  const amount = "Ghs500.00"
  const ref = "Work Abroad"

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };



  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white border border-gray-200 shadow-md rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Payment Verification</h2>
        <div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition" onClick={handleClick}>Get Payment Details</button>
            {showPopup && (
              < div >
              {/* <h2> Payment Details</h2> */}
              <p>Mobile Money Number : {mobileNumber}</p>
              <p> Recipient Name: {payName}</p>
              <p>Amount: <b className='text-green-600'>{amount} </b> </p>
              <p>Reference: {ref} </p>
              <button className='text-red-600'  onClick={handleClose}> Close</button>
            </div>
            )}{showPopup && (
              <div onClick={handleClose}></div>
            )}
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {['email', 'number', 'full_name', 'transaction_id'].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium capitalize text-gray-700">
                {field.replace('_', ' ')}
              </label>
              <input
                type={field === 'email' ? 'email' : 'text'}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                className="mt-1 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}

          <button
            type="submit"
            disabled={!isFormComplete}
            className={`w-full py-2 rounded-lg transition 
              ${isFormComplete
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
          >
            Submit
          </button>
        </form>

        {error && <p className="mt-4 text-red-600 text-sm text-center">{error}</p>}
      </div>
    </div>
  );
}

export default PaymentForm;

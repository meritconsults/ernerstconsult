import React, { useEffect, useState } from 'react';
import axiosInstance from '../hooks/Axiox';

const PaymentList = ({ onSelectPayment }) => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const res = await axiosInstance.get('/payments/payments/');
        setPayments(res.data);
      } catch (err) {
        setError('Failed to fetch payments.');
      } finally {
        setLoading(false);
      }
    };
    fetchPayments();
  }, []);

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-600">{error}</div>;

  return (
    <div className="max-w-3xl mx-auto mt-8 bg-white rounded shadow p-6">
      <h2 className="text-xl font-bold mb-4">Payments</h2>
      <ul>
        {payments.map(payment => (
          <li
            key={payment.id}
            className="border-b py-2 cursor-pointer hover:bg-gray-100"
            onClick={() => onSelectPayment(payment.id)}
          >
            {payment.full_name} - {payment.email} - {payment.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentList;
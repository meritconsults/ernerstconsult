import React, { useEffect, useState } from 'react';
import axiosInstance from '../hooks/Axiox';

const FIELD_LABELS = {
  id: 'ID',
  email: 'Email',
  number: 'Mobile Number',
  full_name: 'Full Name',
  transaction_id: 'Transaction ID',
  amount: 'Amount',
  created_at: 'Date',
  // Add more fields as needed
};

const PaymentDetail = ({ paymentId, onBack }) => {
  const [payment, setPayment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPayment = async () => {
      try {
        const res = await axiosInstance.get(`/payments/payments/${paymentId}/`);
        setPayment(res.data);
      } catch (err) {
        setError('Failed to fetch payment details.');
      } finally {
        setLoading(false);
      }
    };
    fetchPayment();
  }, [paymentId]);

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-600">{error}</div>;
  if (!payment) return null;

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white rounded shadow p-6">
      <button onClick={onBack} className="mb-4 text-blue-600 hover:underline">&larr; Back to list</button>
      <h2 className="text-xl font-bold mb-4">Payment Details</h2>
      <ul className="space-y-2">
        {Object.entries(payment).map(([key, value]) => (
          <li key={key}>
            <span className="font-semibold">{FIELD_LABELS[key] || key.replace(/_/g, ' ')}:</span> {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentDetail;
import React, { useEffect, useState } from 'react';
import axiosInstance from '../hooks/Axiox';

const FIELD_LABELS = {
  first_name: 'First Name',
  last_name: 'Last Name',
  email: 'Email',
  age: 'Age',
  gender: 'Gender',
  telephone: 'Telephone',
  address: 'Address',
  marital_status: 'Marital Status',
  education: 'Education',
  preferred_work: 'Preferred Work',
  work_experience: 'Work Experience (years)',
  elegibility: 'Eligible to Work?',
  traveling_experience: 'Previous Travel Experience?',
  ghana_card: 'Ghana Card Number',
  passport_no: 'Passport Number',
  // Add more fields as needed
};

const FormDetail = ({ formId, onBack }) => {
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchForm = async () => {
      try {
        const res = await axiosInstance.get(`/form/forms/${formId}/`);
        setForm(res.data);
      } catch (err) {
        setError('Failed to fetch form details.');
      } finally {
        setLoading(false);
      }
    };
    fetchForm();
  }, [formId]);

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-600">{error}</div>;
  if (!form) return null;

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white rounded shadow p-6">
      <button onClick={onBack} className="mb-4 text-blue-600 hover:underline">&larr; Back to list</button>
      <h2 className="text-xl font-bold mb-4">Form Details</h2>
      <ul className="space-y-2">
        {Object.entries(form).map(([key, value]) => (
          <li key={key}>
            <span className="font-semibold">{FIELD_LABELS[key] || key.replace(/_/g, ' ')}:</span> {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormDetail;
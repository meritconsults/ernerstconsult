import React, { useEffect, useState } from 'react';
import axiosInstance from '../hooks/Axiox';

const FormList = ({ onSelectForm }) => {
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const res = await axiosInstance.get('/form/submitted-forms/');
        setForms(res.data);
      } catch (err) {
        setError('Failed to fetch forms.');
      } finally {
        setLoading(false);
      }
    };
    fetchForms();
  }, []);

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-600">{error}</div>;

  return (
    <div className="max-w-3xl mx-auto mt-8 bg-white rounded shadow p-6">
      <h2 className="text-xl font-bold mb-4">Submitted Forms</h2>
      <ul>
        {forms.map(form => (
          <li
            key={form.id}
            className="border-b py-2 cursor-pointer hover:bg-gray-100"
            onClick={() => onSelectForm(form.id)}
          >
            {form.first_name} {form.last_name} - {form.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormList;
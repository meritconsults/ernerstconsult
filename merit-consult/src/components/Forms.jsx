import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // <-- Add this import
import axiosInstance from '../hooks/Axiox';

const initialFormState = {
  first_name: '',
  last_name: '',
  email: '',
  age: '',
  date_of_birth: '', 
  gender: 'male',
  telephone: '',
  address: '',
  marital_status: 'single',
  education: 'high school',
  preferred_work: 'cleaner',
  work_experience: '',
  elegibility: 'no',
  traveling_experience: 'no',
  ghana_card: '',
  passport_no: '',
};

const FIELD_LABELS = {
  first_name: 'First Name',
  last_name: 'Last Name',
  email: 'Email',
  age: 'Age',
  date_of_birth: 'Date of Birth',
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
};

const FormApplication = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [preview, setPreview] = useState(false);
  const navigate = useNavigate(); // <-- Add this line

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePreview = (e) => {
    e.preventDefault();
    setPreview(true);
  };

  const handleEdit = () => setPreview(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      age: Number(formData.age),
      work_experience: Number(formData.work_experience),
    };

    try {
      await axiosInstance.post('/form/forms/', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setSuccess('Form submitted successfully!');
      setError('');
      setFormData(initialFormState);
      setPreview(false);
      alert('Form has been submitted successfully!');
      navigate('/'); // <-- Redirect to home page
    } catch (err) {
      setError('Submission failed. Please check the form.');
      setSuccess('');
      if (err.response?.data) {
        console.error('Backend validation error:', err.response.data);
      } else {
        console.error('Unknown submission error:', err);
      }
    }
  };

  const allFieldsFilled = Object.values(formData).every(val => val.trim() !== '');

  const renderSelect = (label, name, options) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <select
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
      >
        {options.map(([value, label]) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-2xl bg-white border border-gray-200 shadow-md rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Application Form</h2>
        {!preview ? (
          <form className="space-y-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ['First Name', 'first_name'],
              ['Last Name', 'last_name'],
              ['Email', 'email'],
              ['Age', 'age'],
              ['Date of Birth', 'date_of_birth'],
              ['Telephone', 'telephone'],
              ['Address', 'address'],
              ['Work Experience (years)', 'work_experience'],
              ['Ghana Card Number', 'ghana_card'],
              ['Passport Number', 'passport_no'],
            ].map(([label, name]) => (
              <div key={name}>
                <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                <input
                  type={name === 'age' || name === 'work_experience' ? 'number' : name === 'date_of_birth' ? 'date' : 'text'}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}

            {renderSelect('Gender', 'gender', [['male', 'Male'], ['female', 'Female'], ['other', 'Other']])}
            {renderSelect('Marital Status', 'marital_status', [['single', 'Single'], ['married', 'Married'], ['divorced', 'Divorced']])}
            {renderSelect('Education', 'education', [['high school', 'High School'], ['college', 'College'], ['university', 'University']])}
            {renderSelect('Eligible to Work?', 'elegibility', [['yes', 'Yes'], ['no', 'No']])}
            {renderSelect('Previous Travel Experience?', 'traveling_experience', [['yes', 'Yes'], ['no', 'No']])}
            {renderSelect('Preferred Work', 'preferred_work', [
              ["factory worker", "FACTORY WORKER"],
              ["farm worker", "FARM WORKER"],
              ["cleaner", "CLEANER"],
              ["caretaker", "CARETAKER"],
              ["chef", "CHEF"],
              ["waiter", "WAITER"],
              ["electrician", "ELECTRICIAN"],
              ["plumber", "PLUMBER"],
              ["security", "SECURITY"],
              ["painter", "PAINTER"],
              ["driver", "DRIVER"],
              ["computer operator", "COMPUTER OPERATOR"],
              ["laundry", "LAUNDRY"],
              ["teacher", "TEACHER"],
              ["nurse", "NURSE"],
              ["forklift", "FORKLIFT"],
              ["civil engineer", "CIVIL ENGINEER"],
              ["mechanic", "MECHANIC"],
            ])}

            <div className="sm:col-span-2 flex gap-4">
              <button
                type="button"
                disabled={!allFieldsFilled}
                onClick={handlePreview}
                className={`w-full py-2 rounded-lg transition text-white 
                  ${allFieldsFilled ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-300 cursor-not-allowed'}`}
              >
                Preview
              </button>
            </div>
          </form>
        ) : (
          <div>
            <h3 className="text-lg font-semibold mb-4 text-center">Preview Your Information</h3>
            <div className="bg-gray-50 border border-gray-200 rounded-xl shadow p-6 mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(formData).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex flex-col bg-white rounded-lg shadow-sm px-4 py-3"
                  >
                    <span className="text-xs text-gray-500 font-medium mb-1">
                      {FIELD_LABELS[key] || key.replace(/_/g, ' ')}
                    </span>
                    <span className="text-base text-gray-800 break-words">
                      {value || <span className="text-gray-400">—</span>}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleEdit}
                className="w-full py-2 rounded-lg bg-gray-400 text-white hover:bg-gray-500 transition"
              >
                Edit
              </button>
              <button
                onClick={handleSubmit}
                className="w-full py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
              >
                Submit
              </button>
            </div>
          </div>
        )}

        {success && <p className="mt-4 text-green-600 text-center">{success}</p>}
        {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default FormApplication;

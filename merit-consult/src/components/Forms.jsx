import React, { useState } from 'react';
import axiosInstance from '../hooks/Axiox';

const initialFormState = {
  first_name: '',
  last_name: '',
  email: '',
  age: '',
  gender: 'male',
  telephone: '',
  address: '',
  marital_status: 'single',
  education: 'high school',
  preferred_work: 'cleaner',
  work_experience: '',
  elegibility: 'no',
  traveling_experience: 'no',
};

const FormApplication = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post('/form/forms/', formData);
      setSuccess('Form submitted successfully!');
      setError('');
      setFormData(initialFormState);
    } catch (err) {
      setError('Submission failed. Please try again.');
      setSuccess('');
      console.error(err);
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
        <form onSubmit={handleSubmit} className="space-y-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            ['First Name', 'first_name'],
            ['Last Name', 'last_name'],
            ['Email', 'email'],
            ['Age', 'age'],
            ['Telephone', 'telephone'],
            ['Address', 'address'],
            ['Work Experience (years)', 'work_experience'],
          ].map(([label, name]) => (
            <div key={name}>
              <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
              <input
                type="text"
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
            ["factory worker","FACTORY WORKER"],
            ["farm worker","FARM WORKER"],
            ["cleaner","CLEANER"],
            ["caretaker","CARETAKER"],
            ["chef","CHEF"],
            ["waiter","WAITER"],
            ["electrician","ELECTRICIAN"],
            ["plumber","PLUMBER"],
            ["security","SECURITY"],
            ["painter","PAINTER"],
            ["driver","DRIVER"],
            ["computer operator","COMPUTER OPERATOR"],
            ["laundry","LAUNDRY"],
            ["teacher","TEACHER"],
            ["nurse","NURSE"],
            ["forklift","FORKLIFT"],
            ["civil engineer","CIVIL ENGINEER"],
            ["mechanic","MECHANIC"],
          ])}

          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={!allFieldsFilled}
              className={`w-full py-2 rounded-lg transition text-white 
                ${allFieldsFilled ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-300 cursor-not-allowed'}`}
            >
              Submit
            </button>
          </div>
        </form>

        {success && <p className="mt-4 text-green-600 text-center">{success}</p>}
        {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default FormApplication;

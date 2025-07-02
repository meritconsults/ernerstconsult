import React from 'react';
import { useNavigate } from 'react-router-dom';
import plumber from "../assets/plumber.jpeg"
import nurse from "../assets/nurse.jpeg"
import mechanic from "../assets/mechanic.jpeg"

// Mock slider images (replace with actual images)
const images = [
  plumber, nurse, mechanic
];

const testimonials = [
  { name: 'Micheal Okyere-Yeboah', message: 'This platform changed my life!' },
  { name: 'Diana Agumey', message: 'Very smooth and easy application process.' },
  { name: 'Johnson Wilberforce', message: 'Highly recommend to anyone seeking work abroad.' },
];

function HomePage() {
  const navigate = useNavigate();
  const [slide, setSlide] = React.useState(0);

  // Simple auto-advance slider
  React.useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col space-y-16 px-4 sm:px-8">

      {/* Header */}
      <section className="text-center py-16 bg-blue-50 rounded-md shadow-md">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Welcome to Our Merit Consult</h1>
        <p className="text-lg text-gray-700">Your first step closer to amazing job opportunities abroad!</p>
      </section>

      {/* About Section */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800">Why Choose Us?</h2>
        <p className="text-gray-600">
          We offer verified opportunities, expert guidance, and a simple application process that gets you closer to your dreams.
          Whether you’re looking for work abroad or locally, we support you from start to finish.
        </p>
        <button
          onClick={() => navigate('/payment')}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Apply Now
        </button>
      </section>

      <section className="text-center max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800">Protocols and Terms</h2>
        <p className="text-gray-600">Applicant must be ready to adhere to every terms and condition which comes with this program</p>
        <div>
          <h3 className="text-3xl font-semibold text-gray-800">Guidance</h3>
          <ul>
          <li><b>Step 1:</b> Click on the blue button indicating <b>Apply Now</b> or on the navigations bar click on <b>Application</b> to commence witht he registration process </li><br/>
          <li><b>Step 2:</b> You will be taken to the payment page to pay for your application fee </li><br />
          <li><b>Step 3:</b> Click on the <b>Get Payment Details</b> button to reveal the payment details and proceed with your payment.</li><br />
          <li><b>Step 4:</b> After successful completion of payment, fillout the form with the necessary details and make sure to fillout the <b>Transaction Id</b> portion as this will be used to confirm your payment during review of your application. and submit the form.</li><br />
          <li><b>Step 5:</b> This is the final step where you are required to fillout your information. <b className='text-red-600'>Please take note:</b> We encourage you to take your time and fillout the form with the correct information to avoind future complications during processing and confirmation.</li><br/>
          <li><b>Step 6:</b> Submitted the completed form and regularly check your mail for confirmation and acceptance message with your confirmation number which would be use as an identification throughout the entire processing. Thank you!!</li>
        </ul>
        </div>
      </section>

      {/* Image Slider + Testimonials */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Slider */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <img src={images[slide]} alt={`slide-${slide}`} className="w-full h-auto object-cover" />
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">What Our Clients Say</h3>
          <ul className="space-y-4">
            {testimonials.map((testimony, index) => (
              <li key={index} className="p-4 border rounded-lg shadow-sm bg-white">
                <p className="text-gray-700 italic">“{testimony.message}”</p>
                <p className="text-right text-sm font-medium text-blue-600 mt-2">- {testimony.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default HomePage;

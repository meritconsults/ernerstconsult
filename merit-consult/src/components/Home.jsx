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
  { name: 'Micheal Okyere-Yeboah', message: 'From consultations to flight bookings, everything was smooth. I got my Canadian visa approved on the first try. Trustworthy and professional—I’ll use them again for family travels!' },
  { name: 'Diana Agumey', message: 'I was hesitant about Luxembourg, but the agency’s guidance was impeccable! They handled everything—visa, accommodation, and even cultural tips. A top-tier service for Ghanaian travelers!' },
  { name: 'Johnson Wilberforce', message: 'Luxembourg is magical! The agency’s local connections got me exclusive truck driving opportunity. Their post-visa support (sim cards, transport passes) was a lifesaver. Highly impressed!' },
  { name: 'Ama Serwaa', message: 'Working in Germany became stress-free thanks to this agency. They secured me a working visa, and even helped with bank setup. Beyond expectations!' },
  { name: 'Kabiru Ramatu', message: 'Exceptional service! The travel agency made my visa process to Germany seamless. Their attention to detail ensured all documents were perfect. Highly recommend for hassle-free Schengen applications!' },
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
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Welcome to Merit Travel and Tour</h1>
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
        <div>
          <h3 className="text-3xl font-semibold text-gray-800">Guidance</h3>
          <p className="text-green-600">Applicant must be ready to adhere to every terms and condition which comes with this program.</p><br/>

          <ul>
          <li><b>Step 1:</b> Begin the registration process by clicking the blue <b>"Apply Now"</b> button or selecting <b>"Application"</b> from the navigation bar. </li><br/>

          <li><b>Step 2:</b> You will be directed to the payment page to remit the application fee of <b>GH₵500.00.</b>. </li><br />

          <li><b>Step 3:</b>Click on the <b>Get Payment Details</b> button to access the necessary payment information and proceed with your transaction.</li><br />

          <li><b>Step 4:</b> Upon successful payment, complete the application form with the required details. It is essential to include the <b>Transaction ID</b>, as this will be used to verify your payment during the application review process. Once completed, submit the form.</li><br />

          <li><b>Step 5:</b> In this final step, ensure that you accurately fill out your information. We strongly recommend taking your time to provide correct details to prevent any complications during processing and confirmation.</li><br/>

          <li><b>Step 6:</b> After submitting the completed form, please monitor your email for a confirmation and acceptance message, which will include your confirmation number. This number will serve as your identification throughout the entire processing period. Thank you!</li>

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
      <div></div>
    </div>
  );
}

export default HomePage;

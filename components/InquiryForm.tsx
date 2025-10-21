import React, { useState } from 'react';

const InquiryForm: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ fullName, email, message });
    setSubmitted(true);
    // Here you would typically send the data to a server
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
      <div className="text-left mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Submit an Inquiry</h2>
        <p className="mt-2 text-gray-600">
          Please complete the form below with your inquiry. Our team will review and respond within 24-48 hours.
        </p>
      </div>
      {submitted ? (
        <div className="text-center p-8 bg-[#E3D7FE] text-[#8654F2] rounded-lg">
            <h3 className="text-2xl font-bold">Thank You!</h3>
            <p className="mt-2">Your inquiry has been submitted successfully. We'll get back to you soon.</p>
        </div>
      ) : (
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="md:grid md:grid-cols-3 md:items-center md:gap-4">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1 md:mb-0 md:text-right">
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="md:col-span-2">
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              placeholder="Enter your full name"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8654F2] transition-shadow"
            />
          </div>
        </div>
        <div className="md:grid md:grid-cols-3 md:items-center md:gap-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 md:mb-0 md:text-right">
            Email Address <span className="text-red-500">*</span>
          </label>
          <div className="md:col-span-2">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8654F2] transition-shadow"
            />
          </div>
        </div>
        <div className="md:grid md:grid-cols-3 md:gap-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 md:mb-0 md:text-right md:pt-3">
            Your Message <span className="text-red-500">*</span>
          </label>
          <div className="md:col-span-2">
            <textarea
              id="message"
              name="message"
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Please describe your inquiry, event proposal, or question in detail..."
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8654F2] transition-shadow"
            ></textarea>
          </div>
        </div>
        <div className="md:grid md:grid-cols-3 md:gap-4">
            <div className="md:col-start-2 md:col-span-2">
                <button
                    type="submit"
                    className="w-full bg-[#8654F2] text-white font-bold py-4 px-6 rounded-lg hover:bg-[#6b43d0] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#AD89FA] focus:ring-opacity-75"
                >
                    Submit Inquiry
                </button>
            </div>
        </div>
      </form>
      )}
    </div>
  );
};

export default InquiryForm;

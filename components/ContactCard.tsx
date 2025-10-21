import React from 'react';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  href: string;
  preview?: boolean;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, description, buttonText, href, preview = false }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 ease-in-out no-underline"
    >
      {preview && (
        <div className="absolute top-4 right-4 bg-gray-800 text-white text-xs font-bold px-3 py-1 rounded-full">
          Preview
        </div>
      )}
      <div className="w-20 h-20 bg-[#E3D7FE] rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <div className="w-full bg-[#8654F2] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#6b43d0] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#AD89FA] focus:ring-opacity-75">
        {buttonText}
      </div>
    </a>
  );
};

export default ContactCard;
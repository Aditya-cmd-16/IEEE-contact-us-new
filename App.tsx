import React from 'react';
import ContactCard from './components/ContactCard';
import InquiryForm from './components/InquiryForm';
import { EmailIcon } from './components/icons/EmailIcon';
import { DiscordIcon } from './components/icons/DiscordIcon';
import { InstagramIcon } from './components/icons/InstagramIcon';
import { LinkedInIcon } from './components/icons/LinkedInIcon';

const contactMethods = [
  {
    icon: <EmailIcon className="w-8 h-8 text-[#8654F2]" />,
    title: 'Email Us',
    description: 'General inquiries, support, and feedback. We aim to respond within 24 hours.',
    buttonText: 'Send an Email',
    href: 'mailto:support@example.com',
    preview: false,
  },
  {
    icon: <DiscordIcon className="w-8 h-8 text-[#8654F2]" />,
    title: 'Join Discord',
    description: 'Join our community for real-time discussions, support, and announcements.',
    buttonText: 'Join Community',
    href: 'https://discord.com',
    preview: false,
  },
  {
    icon: <InstagramIcon className="w-8 h-8 text-[#8654F2]" />,
    title: 'Follow Instagram',
    description: 'Stay up-to-date with our latest news, events, and behind-the-scenes content.',
    buttonText: 'Follow Us',
    href: 'https://www.instagram.com',
    preview: false,
  },
  {
    icon: <LinkedInIcon className="w-8 h-8 text-[#8654F2]" />,
    title: 'Connect on LinkedIn',
    description: 'Connect with us for professional inquiries, partnerships, and career opportunities.',
    buttonText: 'Connect',
    href: 'https://www.linkedin.com',
    preview: false,
  },
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#EAE1FE] font-sans p-4 sm:p-8">
      <div>
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">Contact Us & Support</h1>
          <p className="mt-4 text-lg text-gray-600">
            We're here to help you with any questions you might have. Choose a contact method or fill out the form below.
          </p>
        </header>

        <main>
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <ContactCard
                key={index}
                icon={method.icon}
                title={method.title}
                description={method.description}
                buttonText={method.buttonText}
                href={method.href}
                preview={method.preview}
              />
            ))}
          </section>

          <section>
            <InquiryForm />
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
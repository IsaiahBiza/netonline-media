'use client'; // Marks this component as a Client Component
import { useState } from 'react';

export default function ContactPage() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handle form input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send the form data as JSON
      });

      if (response.ok) {
        console.log('Contact form submitted successfully');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        // Optionally show a success message to the user
      } else {
        console.error('Error submitting the contact form');
      }
    } catch (error) {
      console.error('Error submitting the contact form:', error);
    }
  };

  return (
    <section className="bg-lightGrey py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-darkGrey mb-8">Contact Us</h2>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          
          {/* Name */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-medium text-darkGrey">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-medium text-darkGrey">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
              required
            />
          </div>

          {/* Subject */}
          <div className="mb-6">
            <label htmlFor="subject" className="block text-lg font-medium text-darkGrey">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
              required
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-medium text-darkGrey">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
              rows={5}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" className="bg-primaryRed text-white py-3 px-8 rounded-lg hover:bg-red-600 transition duration-300">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

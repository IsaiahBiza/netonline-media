'use client';  // This marks the component as a Client Component

import { useState } from 'react';

export default function ClientQualifyingForm() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    companySize: '',
    services: [] as string[], // Ensure services is an array of strings
    budget: '',
    timeline: '',
    additionalInfo: '',
  });

  // Handle form input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle services selection for checkboxes
  const handleServicesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      services: checked
        ? [...prev.services, value] // Add to services array if checked
        : prev.services.filter((service) => service !== value), // Remove if unchecked
    }));
  };

  // Handle form submission (sends data to the API)
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
        console.log('Form submitted successfully');
        // Optionally, reset the form or show a success message
        setFormData({
          name: '',
          email: '',
          companyName: '',
          companySize: '',
          services: [],
          budget: '',
          timeline: '',
          additionalInfo: '',
        });
      } else {
        console.error('Error submitting the form');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <section className="bg-lightGrey py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-darkGrey mb-8">Client Qualifying Form</h2>
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

          {/* Company Name */}
          <div className="mb-6">
            <label htmlFor="companyName" className="block text-lg font-medium text-darkGrey">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Company Size */}
          <div className="mb-6">
            <label htmlFor="companySize" className="block text-lg font-medium text-darkGrey">Company Size</label>
            <select
              id="companySize"
              name="companySize"
              value={formData.companySize}
              onChange={handleChange}
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
              required
            >
              <option value="">Select Company Size</option>
              <option value="1-10">1-10 employees</option>
              <option value="11-50">11-50 employees</option>
              <option value="51-200">51-200 employees</option>
              <option value="201+">201+ employees</option>
            </select>
          </div>

          {/* Services Interested In */}
          <div className="mb-6">
            <label className="block text-lg font-medium text-darkGrey">Services Interested In</label>
            <div className="mt-2 space-y-2">
              <div>
                <input
                  type="checkbox"
                  id="custom-ai"
                  name="services"
                  value="Custom Generative AI Solutions"
                  onChange={handleServicesChange}
                />
                <label htmlFor="custom-ai" className="ml-2 text-gray-700">Custom Generative AI Solutions</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="ai-content"
                  name="services"
                  value="AI-Powered Content Creation"
                  onChange={handleServicesChange}
                />
                <label htmlFor="ai-content" className="ml-2 text-gray-700">AI-Powered Content Creation</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="ai-chatbots"
                  name="services"
                  value="LLM-Based Chatbots"
                  onChange={handleServicesChange}
                />
                <label htmlFor="ai-chatbots" className="ml-2 text-gray-700">LLM-Based Chatbots</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="ai-personalization"
                  name="services"
                  value="AI-Driven Personalization"
                  onChange={handleServicesChange}
                />
                <label htmlFor="ai-personalization" className="ml-2 text-gray-700">AI-Driven Personalization</label>
              </div>
            </div>
          </div>

          {/* Budget */}
          <div className="mb-6">
            <label htmlFor="budget" className="block text-lg font-medium text-darkGrey">Budget</label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
              required
            >
              <option value="">Select Budget</option>
              <option value="<£5,000">Less than £5,000</option>
              <option value="£5,000-£20,000">£5,000 - £20,000</option>
              <option value="£20,000-£50,000">£20,000 - £50,000</option>
              <option value=">£50,000">More than £50,000</option>
            </select>
          </div>

          {/* Project Timeline */}
          <div className="mb-6">
            <label htmlFor="timeline" className="block text-lg font-medium text-darkGrey">Project Timeline</label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
              required
            >
              <option value="">Select Timeline</option>
              <option value="Urgent">Urgent (Within 1 month)</option>
              <option value="1-3 months">1-3 months</option>
              <option value="3-6 months">3-6 months</option>
              <option value="6+ months">6+ months</option>
            </select>
          </div>

          {/* Additional Information */}
          <div className="mb-6">
            <label htmlFor="additionalInfo" className="block text-lg font-medium text-darkGrey">Additional Information</label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
              rows={4}
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

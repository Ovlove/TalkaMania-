import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message submitted! (This is a placeholder)');
  };

  return (
    <div className="container mx-auto p-4 max-w-xl">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="p-2 border rounded" required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="p-2 border rounded" required />
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} className="p-2 border rounded" required />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send</button>
      </form>
    </div>
  );
};

export default ContactPage;

import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'An unknown error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-montana-card3 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-white">Send us a message</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {submitError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {submitError}
          </div>
        )}
        
        <div>
          <label htmlFor="name" className="block mb-2 font-medium text-white">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-montana-secondary text-black"
            required
            disabled={isSubmitting}
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block mb-2 font-medium text-white">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-montana-secondary text-black"
            required
            disabled={isSubmitting}
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block mb-2 font-medium text-white">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-montana-secondary text-black"
            disabled={isSubmitting}
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block mb-2 font-medium text-white">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-montana-secondary text-black"
            required
            disabled={isSubmitting}
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="btn btn-secondary w-full flex justify-center items-center gap-2 disabled:opacity-70 bg-montana-secondary hover:bg-montana-secondary-dark text-white"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
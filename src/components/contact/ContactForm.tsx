import { useState } from 'react';
import { Button } from '../ui/Button';
import { X } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  service: string;
}

interface Notification {
  type: 'success' | 'error';
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    service: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [notification, setNotification] = useState<Notification | null>(null);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    // Name validation - only letters and spaces
    if (!formData.name.trim() || !/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = 'Please enter a valid name (letters only)';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Service validation
    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const clearForm = () => {
    setFormData({
      name: '',
      email: '',
      service: ''
    });
    setErrors({});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch('https://pixel-server-1.onrender.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setNotification({
          type: 'success',
          message: 'Message sent successfully!'
        });
        clearForm();
      } else {
        setNotification({
          type: 'error',
          message: 'Failed to send message.'
        });
      }
    } catch (error) {
      console.error('Error:', error);
      setNotification({
        type: 'error',
        message: 'An error occurred while sending the message.'
      });
    }
  };

  return (
    <div className="relative">
      {notification && (
        <div
          className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 flex items-center justify-between ${
            notification.type === 'success' ? 'bg-black text-white' : 'bg-red-600 text-white'
          }`}
        >
          <span>{notification.message}</span>
          <button
            onClick={() => setNotification(null)}
            className="ml-4 hover:opacity-75"
          >
            <X size={20} />
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="text"
            placeholder="Name"
            className={`w-full p-3 border rounded ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              if (errors.name) setErrors({ ...errors, name: undefined });
            }}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            placeholder="Email"
            className={`w-full p-3 border rounded ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: undefined });
            }}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div>
          <select
            className={`w-full p-3 border rounded ${
              errors.service ? 'border-red-500' : 'border-gray-300'
            }`}
            value={formData.service}
            onChange={(e) => {
              setFormData({ ...formData, service: e.target.value });
              if (errors.service) setErrors({ ...errors, service: undefined });
            }}
          >
            <option value="">Select service</option>
            <option value="web">Web Development</option>
            <option value="marketing">Digital Marketing</option>
            <option value="both">Both</option>
          </select>
          {errors.service && (
            <p className="mt-1 text-sm text-red-500">{errors.service}</p>
          )}
        </div>

        <Button type="submit" variant="primary" className="w-full">
          Submit
        </Button>
      </form>
    </div>
  );
}
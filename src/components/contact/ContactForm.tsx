import { useState } from 'react';
import { Button } from '../ui/Button';

interface FormData {
  name: string;
  email: string;
  service: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    service: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="text"
        placeholder="Name"
        className="w-full p-3 border rounded"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 border rounded"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <select
        className="w-full p-3 border rounded"
        value={formData.service}
        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
      >
        <option value="">Select service</option>
        <option value="web">Web Development</option>
        <option value="marketing">Digital Marketing</option>
        <option value="both">Both</option>
      </select>
      <Button type="submit" variant="primary" className="w-full">
        Submit
      </Button>
    </form>
  );
}
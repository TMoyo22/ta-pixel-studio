import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export function ServiceFAQs() {
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      id: 1,
      question: 'Why choose T&A Pixel Studio?',
      answer: 'We specialize in creating dynamic web solutions and impactful marketing strategies.'
    },
    {
      id: 2,
      question: 'What services do we provide?',
      answer: 'Our services include web development, SEO, social media marketing.'
    },
    {
      id: 3,
      question: 'How do we ensure quality?',
      answer: 'Our team follows industry best practices and continuous testing to deliver top-notch services.'
    }
  ];

  const toggleFaq = (id: number) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="max-w-2xl mb-16">
      <h2 className="font-jacques text-3xl mb-8">Service FAQs</h2>
      {faqs.map((faq) => (
        <div key={faq.id} className="border-b border-gray-200 py-4">
          <button
            className="flex items-center justify-between w-full text-left"
            onClick={() => toggleFaq(faq.id)}
          >
            <h3 className="text-lg font-medium">{faq.question}</h3>
            {openFaqId === faq.id ? <Minus size={20} /> : <Plus size={20} />}
          </button>
          {openFaqId === faq.id && (
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}
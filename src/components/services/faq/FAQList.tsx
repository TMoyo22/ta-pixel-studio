import { useState } from 'react';
import { FAQItem } from './FAQItem';
import { faqData } from './faqData';

export function FAQList() {
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="max-w-2xl mb-16">
      <h2 className="font-jacques text-3xl mb-8">Service FAQs</h2>
      {faqData.map((faq) => (
        <FAQItem
          key={faq.id}
          {...faq}
          isOpen={openFaqId === faq.id}
          onToggle={toggleFaq}
        />
      ))}
    </div>
  );
}
export interface FAQ {
    id: number;
    question: string;
    answer: string;
  }
  
  export const faqData: FAQ[] = [
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
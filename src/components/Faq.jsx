import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './Faq.css';

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleQuestionClick = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  const questions = [
    {
      question: 'How can I track my time worked?',
      answer: 'We’ve got you covered. With Bonsai Time Tracking, you can set your preferred hourly rate, toggle your timer and begin working! With our time tracking software your hours will feed your invoices for an end-to-end seamless payment collection process. Forgot to track hours? No problem. You can manually enter your time to add on to hours you’ve already tracked. '
    },
    {
      question: 'What else can I do with Bonsai Time Tracking?',
      answer: 'Besides just tracking your billable hours, there are tons of ways you can leverage the time tracking software included in your account. For instance, you can sync your individual tasks up to your time tracking to create individual tasks/buckets to bill your time against which helps set you up for very simple billing to invoice flow.'
    }
  ];

  return (
    <div className="faq-container">
      {questions.map((faq, index) => (
        <div key={index} className="faq-item">
          <button
            className="faq-question"
            onClick={() => handleQuestionClick(index)}
          >
            <h3 className="font-medium">{faq.question}</h3>
            {expandedIndex === index ? (
              <ChevronUp className="faq-icon" />
            ) : (
              <ChevronDown className="faq-icon" />
            )}
          </button>
          {expandedIndex === index && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
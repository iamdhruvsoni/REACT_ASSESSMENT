import React, { useState } from 'react';

// AccordionItem component represents each item in the accordion
const AccordionItem = ({ title, content, isActive, onClick }) => {
  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={onClick}>
        <h2>
          {title}
          {/* Toggle icon changes based on isActive state   */}
          <i className={`fas ${isActive ? 'fa-chevron-up' : 'fa-chevron-down'}`} style={{ marginLeft: '99%' }}></i>
        </h2>
      </div>
      {/* Show or hide the accordion content based on isActive state */}
      <div className="accordion-body" style={{ display: isActive ? 'block' : 'none' }}>
        {content}
      </div>
    </div>
  );
};

// Accordion component manages the state of which item is active
const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle the active index between the clicked index and null
  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  // Data for accordion items
  const accordionData = [
    { title: 'What is your return policy?', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    { title: 'How do I track my order?', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    { title: 'Can I purchase items again?', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
  ];

  return (
    <div className="accordion">
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isActive={index === activeIndex}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;

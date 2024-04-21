import React, { useState } from "react";
// import "./FAQ.css"; // Import your CSS file for styling

const FAQ = () => {
const AccordionData = [
  {
    id: "collapseOne",
    title: "What is appointment scheduling software?",
    content:
      "Appointment scheduling software is a specialized tool designed to streamline and automate the process of booking and managing appointments for various services or events. It assists in managing schedules, appointments, staff availability, client communication, and more.",
  },
  {
    id: "collapseTwo",
    title: "What are the key features of appointment scheduling software?",
    content:
      "Key features include calendar management, online booking, appointment reminders, staff scheduling, client management, reporting and analytics, integration with other tools (e.g., payment processing, CRM), and often include additional features like waitlist management and automated notifications.",
  },
  {
    id: "collapseThree",
    title: "How does appointment scheduling software benefit businesses?",
    content:
      "It helps businesses improve efficiency by reducing manual appointment scheduling tasks, minimizes scheduling conflicts, enhances client experience with online booking and reminders, increases staff productivity, provides insights for better resource allocation, and supports growth through increased bookings and customer retention.",
  },
  {
    id: "collapseFour",
    title:
      "Is appointment scheduling software secure for handling sensitive data?",
    content:
      "Reputable appointment scheduling software providers prioritize data security. They often implement security measures such as data encryption, access controls, regular backups, and compliance with industry standards like HIPAA and GDPR to ensure the protection of sensitive information.",
  },
  {
    id: "collapseFive",
    title: "Can appointment scheduling software integrate with other systems?",
    content:
      "Yes, it often integrates with other business tools such as CRM (Customer Relationship Management) systems, payment processors, email marketing platforms, and telecommunication systems. Integration enables seamless data flow and enhances overall business efficiency.",
  },
];

  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="accordion-container w-100 mt-4 mt-lg-0">
      <h4>CHOOSE YOUR OWN APPOINTMENT</h4>
      <h1>Guide To Appointment</h1>
      {AccordionData.map((item, index) => (
        <div
          key={item.id}
          onClick={() => handleAccordionClick(index)}
          className={`accordion-item ${openIndex === index ? "open" : ""}`}
        >
          <div className="accordion-header">
            <div className="accordion-title">{item.title}</div>
            <div className="accordion-arrow">
              <span class="material-symbols-outlined mb-0">expand_more</span>
            </div>
          </div>
          <div className="accordion-content">{item.content}</div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;

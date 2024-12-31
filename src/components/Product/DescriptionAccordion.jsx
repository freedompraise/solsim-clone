import { useState } from "react";

const DescriptionAccordion = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) =>
    setActiveSection(activeSection === section ? null : section);

  const sections = [
    { title: "Description", content: "Details about the SOLSIM product." },
    { title: "How to Redeem", content: "Steps to redeem your SOLSIM." },
    { title: "Review", content: "Customer reviews go here." },
    { title: "Terms and Conditions", content: "T&C details." },
  ];

  return (
    <div className="mt-6">
      {sections.map((section, index) => (
        <div key={index} className="border-b">
          <button
            onClick={() => toggleSection(index)}
            className="w-full text-left py-2 font-semibold"
          >
            {section.title}
          </button>
          {activeSection === index && (
            <div className="p-4 bg-gray-50">{section.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DescriptionAccordion;

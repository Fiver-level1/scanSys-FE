import React, { useState } from "react";

const faqData = [
    {
        question: "How do I place an order?",
        answer: "Scan the QR code on the table to open the menu, select the desired dishes, and add them to your order. Go to checkout to complete the order and pay."
    },
    {
        question: "What payment methods can I use?",
        answer: "You can pay via Stripe, Apple Pay, Google Pay, Payconiq, and other available payment methods in the app."
    },
    {
        question: "How do I cancel my order?",
        answer: "Once paid, an order usually cannot be canceled. Contact the restaurant staff for any exceptions."
    },
    {
        question: "Can I make a specific adjustment to my order?",
        answer: "During the ordering process, you can add or remove extras for some dishes. Use the comments field for specific requests, such as “no sauce” or “extra spicy.”"
    },
    {
        question: "My order has not arrived, what should I do?",
        answer: "Contact a staff member in the restaurant immediately. The app provides real-time status updates for your order, but errors can sometimes occur."
    },
    {
        question: "Contact Information",
        answer: "For questions or support, you can email support@restaurantapp.com."
    }
];


const FaqSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <div className="faqWrapper">
                <div className="faq-title textTittle">
                    <h2>FAQ</h2>
                </div>
                <div className="faq" id="accordion">
                    {faqData.map((item, index) => (
                        <div className="card" key={index}>
                            <div
                                className="card-header"
                                onClick={() => toggleAccordion(index)}
                            >
                                <h5 className="faq-title">
                                    <span className="badge">{index + 1}</span> {item.question}
                                </h5>
                            </div>
                            <div
                                className={`collapse ${activeIndex === index ? "show" : ""}`}
                            >
                                <div className="card-body">
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;

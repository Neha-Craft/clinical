"use client"

import { useState } from "react"


export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null)

const faqData = [
  {
    question: "Can I register as a new patient?",
    answer:
      "Yes, you can. Please follow the link to the online form.",
  },
  {
    question: "What should I do if I think I am showing Covid-19 symptoms?",
    answer:
      "Please inform the reception when making an appointment if you are showing symptoms of Covid-19. You may be asked to take an antigen test before attending and to wear a mask to your appointment. HSE guidelines are regularly updated, so please consult the HSE for the latest advice. HSE Live is available at 1800 700 700, and the HSE Covid-19 webpage can be accessed online. Please contact the surgery for further advice.",
  },
  {
    question: "Can I attend the surgery without an appointment?",
    answer:
      "Currently, no. We request all patients to only attend our surgery after making an appointment. This can be done by phone or email. Emergencies will be accommodated, and same-day appointments are available on most days for acute issues such as sudden onset illnesses, injuries, and infections. We kindly ask that acute appointments are not used to discuss other issues, as we aim to reserve these slots for urgent concerns.",
  },
  {
    question: "Are you seeing patients in person?",
    answer:
      "Yes, we are. We do not offer phone consultations and request all patients to attend pre-arranged appointments only. If you have any safety concerns about attending your GP in person, please call our reception team.",
  },
]


  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="faq section light-background">
      <div className="container section-title">
        <h2>Frequently Asked Questions</h2>
        <p>Find answers to common questions about appointments, Covid-19 safety, and visiting our clinic.</p>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="faq-container">
              {faqData.map((item, index) => (
                <div className={`faq-item ${activeIndex === index ? "faq-active" : ""}`} key={index}>
                  <h3 onClick={() => toggleFaq(index)}>{item.question}</h3>
                  <div className="faq-toggle" onClick={() => toggleFaq(index)}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9,18 15,12 9,6"></polyline>
                    </svg>
                  </div>
                  <div className="faq-content">
                    <div>
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

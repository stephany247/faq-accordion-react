import { useState } from "react";
import "./App.css";
import backgroundMobile from "./assets/images/background-pattern-mobile.svg";
import backgroundDesktop from "./assets/images/background-pattern-desktop.svg";
import star from "./assets/images/icon-star.svg";
import plus from "./assets/images/icon-plus.svg";
import minus from "./assets/images/icon-minus.svg";

function App() {
  const faqs = [
    {
      question: "What is Frontend Mentor, and how will it help me?",
      answer:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
      question: "Is Frontend Mentor free?",
      answer:
        "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    },
    {
      question: "Can I use Frontend Mentor projects in my portfolio?",
      answer:
        "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    },
    {
      question:
        "How can I get help if I'm stuck on a challenge?",
      answer:
        "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <main className="flex flex-col items-center justify-center text-dark-purple font-normal">
        <picture>
          <source srcSet={backgroundMobile} media="(max-width: 640px)" />

          <source srcSet={backgroundDesktop} media="(min-width: 641px)" />

          <img
            src={backgroundDesktop}
            alt="background image"
            className="w-full absolute top-0 left-0 h-1/3 object-cover z-0"
          />
        </picture>

        <div className="p-6 mx-6 my-24 border rounded-lg shadow-xl bg-white z-10 max-w-lg">
          <div className="flex gap-4 items-center mb-4">
            <img src={star} className="size-6"></img>
            <h1 className="text-3xl font-bold">FAQs</h1>
          </div>
          <ul className="space-y-6">
            {faqs.map((faq, index) => (
              <li key={index} className="flex flex-col gap-4">
                {/* question section */}
                <div
                  className="flex justify-between gap-4 hover:text-purple active:text-purple"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="font-semibold">{faq.question}</h3>
                  <img src={openIndex === index ? minus : plus}></img>
                </div>
                {/* Answer Section (Hidden/Visible Based on State) */}
                <p
                  className={`text-grayish-purple text-sm transition-all duration-500 ease-in-out ${
                    openIndex === index
                      ? "opacity-100 max-h-40"
                      : "opacity-0 max-h-0 overflow-hidden"
                  }`}
                >
                  {faq.answer}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <footer class="text-center">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="text-grayish-purple"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="#" className="text-grayish-purple">
          Onyinye Oguocha
        </a>
        .
      </footer>
    </>
  );
}

export default App;

import React, { useState } from "react";

export default function Accordion() {
  // Set the first item as active by default
  const [activeIndex, setActiveIndex] = useState(1);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white p-8 flex flex-col gap-6 rounded-xl mt-16" id="accordionExample">
      {/* Accordion Item 1 */}
      <div className="border-b border-gray-200">
        <h2>
          <button
            className="group flex w-full items-center justify-between py-4 px-5 text-left font-medium text-gray-900 bg-white dark:bg-gray-800 dark:text-gray-100 focus:outline-none"
            onClick={() => handleToggle(1)}
          >
            Is it safe to work with Lido?
            <span
              className={`transition-transform duration-200 ease-in-out ${
                activeIndex === 1 ? "rotate-180" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </button>
        </h2>
        {activeIndex === 1 && (
          <div className="px-5 py-4 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-200">
            <strong>This is the first item's accordion body.</strong> Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        )}
      </div>

      {/* Accordion Item 2 */}
      <div className="border-b border-gray-200">
        <h2>
          <button
            className="group flex w-full items-center justify-between py-4 px-5 text-left font-medium text-gray-900 bg-white dark:bg-gray-800 dark:text-gray-100 focus:outline-none"
            onClick={() => handleToggle(2)}
          >
            What is Lido staking APR for Ethereum?
            <span
              className={`transition-transform duration-200 ease-in-out ${
                activeIndex === 2 ? "rotate-180" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </button>
        </h2>
        {activeIndex === 2 && (
          <div className="px-5 py-4 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-200">
            <strong>This is the second item's accordion body.</strong> Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        )}
      </div>

      {/* Accordion Item 3 */}
      <div>
        <h2>
          <button
            className="group flex w-full items-center justify-between py-4 px-5 text-left font-medium text-gray-900 bg-white dark:bg-gray-800 dark:text-gray-100 focus:outline-none"
            onClick={() => handleToggle(3)}
          >
            What fee is applied by Lido? What is this used for?
            <span
              className={`transition-transform duration-200 ease-in-out ${
                activeIndex === 3 ? "rotate-180" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </button>
        </h2>
        {activeIndex === 3 && (
          <div className="px-5 py-4 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-200">
            <strong>This is the third item's accordion body.</strong> Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        )}
      </div>   <div>
        <h2>
          <button
            className="group flex w-full items-center justify-between py-4 px-5 text-left font-medium text-gray-900 bg-white dark:bg-gray-800 dark:text-gray-100 focus:outline-none"
            onClick={() => handleToggle(4)}
          >
            What fee is applied by Lido? What is this used for?
            <span
              className={`transition-transform duration-200 ease-in-out ${
                activeIndex === 3 ? "rotate-180" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </button>
        </h2>
        {activeIndex === 4 && (
          <div className="px-5 py-4 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-200">
            <strong>This is the third item's accordion body.</strong> Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        )}
      </div>
      <div>
        <h2>
          <button
            className="group flex w-full items-center justify-between py-4 px-5 text-left font-medium text-gray-900 bg-white dark:bg-gray-800 dark:text-gray-100 focus:outline-none"
            onClick={() => handleToggle(5)}
          >
            What fee is applied by Lido? What is this used for?
            <span
              className={`transition-transform duration-200 ease-in-out ${
                activeIndex === 4 ? "rotate-180" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </button>
        </h2>
        {activeIndex === 5 && (
          <div className="px-5 py-4 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-200">
            <strong>This is the third item's accordion body.</strong> Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        )}
      </div>
    </div>
  );
}

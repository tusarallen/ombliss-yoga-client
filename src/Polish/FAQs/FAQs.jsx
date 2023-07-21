/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
const FAQs = () => {
  return (
    <div className="mb-16">
      <h2 className="text-center font-bold font-serif text-3xl py-4 mb-12">
        Frequently Asked Questions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto md:gap-20">
        <div className="space-y-4">
          <details
            className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
              <h2 className="font-bold text-xl">
                Is yoga suitable for women of all ages and fitness?
              </h2>

              <span className="relative h-5 w-5 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 font-sans">
              Yes, absolutely! Yoga is a versatile practice that accommodates
              women of all ages, fitness levels, and body types. Our classes are
              designed to be inclusive and adaptable, ensuring that everyone can
              participate and benefit from the practice!
            </p>
          </details>
          {/* 2nd */}
          <details className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
              <h2 className="font-bold text-xl">
                What makes your women's yoga school unique?
              </h2>

              <span className="relative h-5 w-5 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 opacity-100 group-open:opacity-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 opacity-0 group-open:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 font-sans">
              At our women's yoga school, we prioritize creating a nurturing and
              supportive environment where women can feel comfortable exploring
              their practice. Our experienced instructors are passionate about
              women's health and well-being, and we offer a wide range of
              classes tailored to meet the specific needs of women at different
              stages of life!
            </p>
          </details>
          {/* 3rd */}
          <details className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
              <h2 className="font-bold text-xl">
                Do you offer virtual or online yoga classes?
              </h2>

              <span className="relative h-5 w-5 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 opacity-100 group-open:opacity-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 opacity-0 group-open:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 font-sans">
              Yes, we do! We understand that life can get busy, so we provide
              virtual and online yoga classes that you can access from the
              comfort of your home. Our virtual classes allow you to maintain a
              consistent practice and enjoy the benefits of yoga, no matter
              where you are!
            </p>
          </details>
        </div>
        <div>
          <img
            className="md:w-96 md:h-80"
            src="https://i.ibb.co/qj97TvB/faq.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FAQs;

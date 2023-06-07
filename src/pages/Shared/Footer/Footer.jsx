import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaStripe,
  FaTwitter,
} from "react-icons/fa";

/* eslint-disable react/no-unknown-property */
const Footer = () => {
  return (
    <div>
      <footer aria-label="Site Footer" className="bg-gray-100">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-8 sm:px-6 lg:space-y-8 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-teal-600">
              <div className="avatar">
                <Link>
                  <div className="flex gap-8">
                    <div className="w-20 rounded-full">
                      <img
                        className="bg-gray-100 p-1 rounded-md"
                        src="https://i.ibb.co/1v7xsrY/Dark-Green-White-Modern-Yoga-Logo.png"
                      />
                    </div>
                    <div className="flex-shrink-0 text-center">
                      <div>
                        <h1 className="text-[#1A1919] font-extrabold text-3xl pt-2">
                          ŌmBliss Yoĝa
                        </h1>
                      </div>
                      <div>
                        <span className="font-extrabold text-3xl -ml-7 text-[#ff7700]">
                          School
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <ul className="flex justify-start gap-6 mt-8 sm:mt-0 sm:justify-end">
              <li>
                <FaFacebook
                  className="cursor-pointer"
                  style={{ fontSize: "30px" }}
                />
              </li>

              <li>
                <FaInstagram
                  className="cursor-pointer"
                  style={{ fontSize: "30px" }}
                />
              </li>

              <li>
                <FaTwitter
                  className="cursor-pointer"
                  style={{ fontSize: "30px" }}
                />
              </li>

              <li>
                <FaGithub
                  className="cursor-pointer"
                  style={{ fontSize: "30px" }}
                />
              </li>

              <li>
                <FaStripe
                  className="cursor-pointer"
                  style={{ fontSize: "30px" }}
                />
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 border-t border-gray-100 sm:grid-cols-2 lg:grid-cols-4 lg:pt-8">
            <div>
              <p className="font-bold text-2xl text-gray-900">Services</p>

              <nav aria-label="Footer Navigation - Services" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 font-bold text-normal"
                    >
                      1on1 Coaching
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 font-bold"
                    >
                      School Review
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 font-bold"
                    >
                      Accounts Review
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 font-bold"
                    >
                      SEO Optimisation
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className="font-bold text-2xl text-gray-900">About</p>

              <nav aria-label="Footer Navigation - Company" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 font-bold"
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 font-bold"
                    >
                      Meet the Team
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 font-bold"
                    >
                      Accounts Review
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className="font-bold text-2xl text-gray-900">Contact</p>

              <nav aria-label="Footer Navigation - Company" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 font-bold"
                    >
                      Contact
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 font-bold"
                    >
                      FAQs
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 font-bold"
                    >
                      Live Chat
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className="font-bold text-2xl text-gray-900">Legal</p>

              <nav aria-label="Footer Navigation - Legal" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 font-bold"
                    >
                      Accessibility
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 font-bold"
                    >
                      Returns Policy
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 font-bold"
                    >
                      Refund Policy
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 font-bold"
                    >
                      Hiring Statistics
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <p className="text-xs text-gray-500">
            &copy; 2022. OmBliss Yoga School. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

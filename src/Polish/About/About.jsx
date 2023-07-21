/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

const About = () => {
  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img
            src="https://i.ibb.co/pQfcp1C/young-blonde-woman-sportswear-is-meditating-yoga-mat-with-closed-eyes-1268-17236.jpg"
            className="w-3/4 rounded-lg shadow-2xl"
          />
          <img
            src="https://i.ibb.co/mtyMHNj/pic3.jpg"
            className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2 border-8 border-white"
          />
        </div>
        <div className="lg:w-1/2 p-4">
          <h3 className="text-2xl font-bold text-orange-500">About Us</h3>
          <h1 className="text-5xl font-bold mt-3">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p className="py-3 mt-2 font-sans">
            Yoga has long been embraced by women around the world as a
            transformative practice that nurtures the body, mind, and spirit.
            Its origins date back thousands of years, rooted in ancient Indian
            traditions, and over time, it has evolved into a popular form of
            exercise and meditation.
          </p>
          <p className="mt-1 font-sans">
            Yoga has always been an inclusive practice, inviting women to
            embrace their uniqueness and connect with their inner selves. From
            its inception, women have been influential in shaping the philosophy
            and techniques of yoga.
          </p>
          <button className="btn btn-warning hover:btn-success mt-5">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;

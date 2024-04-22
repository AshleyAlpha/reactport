import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center w-3/4 mt-16">
        <img
          src="./images/mamie.jpeg"
          alt="image"
          className="w-1/4 rounded-full shadow-xl"
        />
        <div className="ml-8"> 
          <h1 className="text-cyan-700 text-xl border-b border-cyan-700">I am a Web Developer</h1>
          <p className="text-cyan-500 text-lg">
            A web developer is a programmer who specializes in the development
            of applications that run on the web. They are responsible for
            creating websites, web applications, and other web-based solutions
            using programming languages such as HTML, CSS, and JavaScript, as
            well as various frameworks and libraries. Web developers can work
            on both the front-end (client-side) and back-end (server-side)
            aspects of web development, depending on their expertise and the
            requirements of the project. They often collaborate with designers,
            content creators, and other members of a development team to create
            functional and visually appealing web experiences.
          </p>
          <div className="pb-24 py-24 flex items-center justify-center">
    <a href="https://www.instagram.com/ashley_alpha_avril" className="text-cyan-700"><FaInstagram className="text-cyan-700 text-xl mr-4" /></a>
    <a href="https://linkedin.com/in/ashley-alpha-mbabazi-03943b185" className="text-cyan-700"><FaLinkedinIn className="text-cyan-700 text-xl mr-4" /></a>
    <a href="https://github.com/AshleyAlpha" className="text-cyan-700"><FaGithub className="text-cyan-700 text-xl mr-4" /></a>
</div>
        </div>
      </div>
    </div>
  );
};

export default Home;

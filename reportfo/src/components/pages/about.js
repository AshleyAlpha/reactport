import React from "react";

const About = () => {
  return (
    <div className="flex justify-between items-center px-8 py-4">
      <div className="max-w-2xl mr-24">
        <h1 className="text-3xl text-cyan-700 font-bold underline mb-4">
          Who I am?
        </h1>
        <p className="text-lg text-cyan-500">
          A web developer is a programmer who specializes in the development of
          applications that run on the web. They are responsible for creating
          websites, web applications, and other web-based solutions using
          programming languages such as HTML, CSS, and JavaScript, as well as
          various frameworks and libraries. Web developers can work on both the
          front-end (client-side) and back-end (server-side) aspects of web
          development, depending on their expertise and the requirements of the
          project. They often collaborate with designers, content creators, and
          other members of a development team to create functional and visually
          appealing web experiences.
        </p>
      </div>
      <img
        src="./images/using.webp"
        alt="image"
        className="w-1/4  rounded-full shadow-xl"
      />
    </div>
  );
};

export default About;

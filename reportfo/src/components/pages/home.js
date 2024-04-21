import React from "react";

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
        </div>
      </div>
    </div>
  );
};

export default Home;

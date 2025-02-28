import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          About FactoX
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Welcome to{" "}
          <span className="text-purple-400 font-semibold">FactoX</span>, your
          ultimate platform for solving factorial problems efficiently! Our
          mission is to provide an intuitive and interactive tool to compute
          factorials quickly, while also offering a seamless user experience.
        </p>
        <p className="text-lg text-gray-300 mb-6">
          Whether you're a student, mathematician, or coding enthusiast, FactoX
          makes factorial calculations easy with a minimalistic and futuristic
          interface. Plus, our contact section ensures you can always reach out
          with feedback or queries!
        </p>
        <p className="text-lg text-gray-300">
          Join us as we continue to enhance FactoX with more features and
          mathematical tools in the future.
        </p>
      </div>
    </div>
  );
};

export default About;

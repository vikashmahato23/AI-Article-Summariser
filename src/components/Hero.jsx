import React from "react";
import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col ">
      <nav className="flex justify-around items-center w-full mb-10 pt-5 ">
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" height="40" width="40" />
        </div>

        <a
          href="https://github.com/pankajktech/ai-summariser"
          target="_blank"
          rel="noreferrer"
          className="hover:translate-x-1 transition-all duration-300"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            height="35"
            width="35"
            alt="github"
            title="github"
          />
        </a>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br />
        <span className="blue_gradient">ChatGPT</span>
      </h1>

      <p className="font-inter text-xl text-gray-700 text-center max-w-3xl mt-2">
        Summarize any article with the power of AI. <br />
        Just paste the link and get the summary.
      </p>
    </header>
  );
};

export default Hero;

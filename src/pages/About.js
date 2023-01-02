import React from "react";

// Import Images
import MadaiPic from "../img/about/Madai-pic.png";

//Import Motion
import { motion } from "framer-motion";

// Import Link
import { Link } from "react-router-dom";

//Import Transition
import { transition1 } from "../transitions";

const About = () => {
  return (
    <div className="container mx-auto px-50 h-full relative">
      {/* text & img wrapper */}
      <div className="flex flex-col lg:flex-row h-screen items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
        {/* text */}
        <div className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start">
          <h1 className="h1">About me</h1>
          <p className="text-[26px] lg:text-[30px] font-primary mb-4 lg:mb-4">
            Artist . First Gen . Latina
          </p>
          <p className="mb-12 max-w-xl">
            My work consists of many inspirations such as world issues,
            psychoanalysis, everyday life, and my interest in the human body. My
            creative work includes illustration and digital media. As a
            first-generation college student, most of my life consisted of a
            “working with what I have” mindset.
            <br />
            {/* <br />
            I like working with found objects and experimenting with the
            materials that are around me. From human hair to charcoal, I try to
            think of how an audience approaches my work. As an artist, I am not
            focused on one medium but focused on how any medium is transformed
            into what I make today. Emotion and reaction are important when it
            comes to brainstorming the start of a piece of art. I move freely
            and I am open to what goes on in me.
            <br /> */}
            <br /> My art is heavily influenced by my emotions and how I process
            everything going on in my life in hopes that the audience relates or
            questions my emotions. For example, my background as a
            first-generation student influences my recent work Too Mexican to be
            American, Too American to be Mexican. Understanding my identity has
            been a long struggle and I have been working with transparency and
            pieces from my culture to try to piece my life together. <br />
            <br />
            Charcoal used to be my profound influence on my illustrations, but
            color has slowly implemented itself within my work. The goal of my
            work is to learn to process my emotions and understand how others
            react and approach my work.
            <br />
          </p>
          <Link to={"/portfolio"} className="btn">
            View my work
          </Link>
        </div>
        {/* image */}
        <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ transition: transition1, duration: 1.5 }}
          >
            <img src={MadaiPic} alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

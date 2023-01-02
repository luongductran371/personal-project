import React from "react";

// import link
import { Link } from "react-router-dom";

//Import Motion
import { motion } from "framer-motion";

//Import Transition
import { transition1 } from "../transitions";

const Home = () => {
  return (
    <div className="container mx-auto h-full relative">
      {/* text & img wrapper */}
      <div className="flex flex-col justify-center h-screen">
        {/* text */}
        <div className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start">
          <h1 className="h1">
            Undergraduate <br /> Artist
          </h1>
          <p className="text-[26px] lg:text-[30px] font-primary mb-4 lg:mb-12">
            Holland, MI
          </p>
          <Link to={"/contact"} className="btn mb-[30px]">
            contact me
          </Link>
        </div>
        {/* image */}
        <div className="flex justify-end max-h-96 lg:max-h-max">
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ transition: transition1, duration: 1.5 }}
            className="relative lg:-right-60 overflow-hidden"
          >
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={transition1}
              src="https://static.wixstatic.com/media/341c42_f376b256126442da8028b95a32a258b9~mv2.png/v1/fill/w_867,h_650,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Paper_edited.png"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;

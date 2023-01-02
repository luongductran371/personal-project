import React from "react";

// Import Link
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="container mx-auto h-full relative">
      <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
        {/* text */}
        <div className="flex flex-col lg:items-start">
          <h1 className="h1">Portfolio</h1>
          <p className="mb-12 max-w-sm">
            This portfolio is a glimpse at the way I design and prototype in
            code. Design something familiar, program it to do something
            unexpected.
            <br />
            <br />
            Make sure people feel something. Available for the right project.
          </p>
          <Link to={"/contact"} className="btn mb-[30px] mx-auto lg:mx-0">
            Hire me
          </Link>
        </div>
        {/* image grid */}
        <div className="grid grid-cols-2 lg:gap-2">
          {/* image */}
          <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
            <img
              className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
              src="https://static.wixstatic.com/media/341c42_c227113b042946568615aa5c6d8cd862~mv2.png/v1/fit/w_1164,h_813,q_90/341c42_c227113b042946568615aa5c6d8cd862~mv2.webp"
              alt=""
            />
          </div>
          <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
            <img
              className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
              src="https://static.wixstatic.com/media/341c42_9ef7e0e6e728432985d68afe79dbad49~mv2.png/v1/fit/w_1164,h_813,q_90/341c42_9ef7e0e6e728432985d68afe79dbad49~mv2.webp"
              alt=""
            />
          </div>
          <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
            <img
              className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
              src="https://static.wixstatic.com/media/341c42_6af3af2ea78b4351a9d0b4d305ccde88~mv2.png/v1/fit/w_1164,h_813,q_90/341c42_6af3af2ea78b4351a9d0b4d305ccde88~mv2.webp"
              alt=""
            />
          </div>
          <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
            <img
              className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
              src="https://static.wixstatic.com/media/341c42_62a64ff7f1ea4c79b22761fef15c180d~mv2.png/v1/fit/w_1164,h_813,q_90/341c42_62a64ff7f1ea4c79b22761fef15c180d~mv2.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

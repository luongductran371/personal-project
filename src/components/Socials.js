import React from "react";

//Import Icons
import { ImInstagram, ImLinkedin } from "react-icons/im";

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24">
      <ul className="flex gap-x-4">
        <li>
          <a href="https://www.instagram.com/madaisart/">
            <ImInstagram />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/madai-huerta-923728231/">
            <ImLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;

import React from "react";
import { HeroContainer } from "../styles/main";
import heroImage from "../images/banner.png";

const Hero = () => {
  return (
    <HeroContainer className=" heroImage">
      <h2 className="text-center">
        ¡Adquiere todos tus productos favoritos al mejor precio!
      </h2>
    </HeroContainer>
  );
};

export default Hero;

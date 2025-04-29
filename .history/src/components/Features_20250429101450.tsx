import React from "react";
import BentoCard from "./BentoCard";

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-5">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Into the Metagame Layer
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Immerse yourself in the metagame layer, where you can explore the
            intricate world of game mechanics, strategies, and player
            interactions. This layer serves as the foundation for understanding
            the dynamics of gameplay, offering insights into how players engage
            with the game and each other.
          </p>
        </div>
        <div className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                radia<b>n</b>t
              </>
            }
            description=" A cross-platform metagame app, turning your gaming activities accross web2 and web3 into a
          rewarding experience. "
            isComingSoon
          />
        </div>
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <div className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Features;

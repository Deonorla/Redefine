import React from "react";
import BentoCard from "./BentoCard";
import { TiLocationArrow } from "react-icons/ti";

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:!px-5">
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
          <div className="bento-tilt_1 row-span-1 md:!col-span-1 md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title={
                <>
                  zig<b>m</b>a
                </>
              }
              description="An anime and gaming inspired NFT collection - the Ip primed for expansion."
            />
          </div>
          <div className="bento-tilt_1 row-span-1 ms-32 md:!col-span-1 md:ms-0">
            <BentoCard
              src="videos/feature-3.mp4"
              title={
                <>
                  n<b>e</b>xus
                </>
              }
              description="A gamified social hub, adding a new dimension to your gaming experience."
            />
          </div>
          <div className="bento-tilt_1 me-14 md:!col-span-1 md:me-0">
            <BentoCard
              src="videos/feature-4.mp4"
              title={
                <>
                  az<b>u</b>l
                </>
              }
              description="A cross-world AI agent - elevating your gameplay to be more fun and productive."
            />
          </div>
          <div className="bento-tilt_2 ">
            <div className="flex size-full flex-col  justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font max-w-64">
                M<b>0</b>re co<b>m</b>ing soo<b>n</b>
              </h1>
              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </div>

          <div className="bento-tilt_2">
            <video
              src="videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className="size-full object-center object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

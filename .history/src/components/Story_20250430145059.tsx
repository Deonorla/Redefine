import React from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import RoundedCorners from "./RoundedCorners";
import Button from "./Button";

const Story = () => {
  const frameRef = React.useRef<HTMLImageElement>(null);

  const handleOnMouseLeave = () => {
    const element = frameRef.current;
    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,

      ease: "power1.out",
    });
  };
  const handleOnMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // Adjust the multiplier for rotation speed
    const rotateY = ((x - centerX) / centerX) * 10; // Adjust the multiplier for rotation speed

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.out",
    });
  };

  return (
    <section
      id="story"
      className="min-h-dvh w-screen bg-screen bg-black text-blue-50"
    >
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">
          the multiversal ip world
        </p>
        <div className="relative size-full ">
          <AnimatedTitle
            title="The st<b>o</b>ry of <br/> a hidden real<b>m</b>"
            sectionId="story"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />
          <div className="story-img-container ">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  onMouseLeave={handleOnMouseLeave}
                  onMouseUp={handleOnMouseLeave}
                  onMouseEnter={handleOnMouseLeave}
                  onMouseMove={handleOnMouseMove}
                  ref={frameRef}
                  src="/img/entrance.webp"
                  alt="entrance"
                  className="object-contain"
                />
              </div>
            </div>
            <RoundedCorners />
          </div>
        </div>
        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              Where realms collide, stories unfold. Discover the hidden
              narrative of a universe waiting to be explored.
            </p>
            <Button
              id="realm-button"
              containerClass="mt-5 "
              title="disccover prologue"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;

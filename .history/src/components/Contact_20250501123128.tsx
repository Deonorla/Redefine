import React from "react";

interface ImageClipBoxProps {
  src: string;
  clipclass: string;
}

const ImageClipBox = ({ src, clipclass }: ImageClipBoxProps) => (
  <div className={clipclass}>
    <img src={src} alt="" />
  </div>
);

const Contact = () => {
  return (
    <div className="my-20 min-h-96 w-screen px-10" id="contact">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div
          className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden
       sm:hidden lg:left-20 lg:w-96"
        >
          <ImageClipBox
            src="img/contact-1.webp"
            clipclass="contact-clip-path-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;

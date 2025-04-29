import React from "react";

interface BentoCardProps {
  src: string;
  title: string | React.ReactNode;
  description?: string;
  isComingSoon?: boolean;
}

const BentoCard = ({
  src,
  title,
  description,
  isComingSoon,
}: BentoCardProps) => {
  return (
    <div className="relative size-full ">
      <video
        className="absolute left-0 top-0 size-full object-cover"
        src={src}
        loop
        muted
        autoPlay
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font"> {title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BentoCard;

import React from "react";

interface BentoCardProps {
  src: string;
  title: string | React.ReactNode;
  description: string;
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
      {title}
    </div>
  );
};

export default BentoCard;

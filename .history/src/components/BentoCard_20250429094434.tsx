import React from "react";

interface BentoCardProps {
  src: string;
  title: string;
  description: string;
  isComingSoon?: boolean;
}

const BentoCard = ({ src, title, description }: BentoCardProps) => {
  return <div>BentoCard</div>;
};

export default BentoCard;

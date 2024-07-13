import React from "react";
import Link from "next/link";

interface CardProps {
  title: string;
  slug: string;
  date: string;
}

const Card = (props: CardProps) => {
  const { title, slug, date } = props;

  return (
    <Link
      className={
        "justify-between py-2 flex hover:text-white group transition duration-[700ms] ease-out hover:duration-[50ms]"
      }
      href={slug}
    >
      <h1 className="overflow-hidden whitespace-nowrap overflow-ellipsis">
        {title}
      </h1>
      <span className="text-[#656565] group-hover:text-white transition duration-[100ms] ease-out hover:duration-[50ms] ml-3">
        {date}
      </span>
    </Link>
  );
};

export default Card;

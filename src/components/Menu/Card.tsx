import type { FunctionComponent, ReactNode } from "react";

import { Link } from "react-router-dom";

interface CardProps {
  icon: ReactNode;
  title: string;
  href: string;
}

const Card: FunctionComponent<CardProps> = ({ icon, title, href }) => {
  return (
    <Link
      to={href}
      className="flex h-40 flex-col items-center justify-center rounded-xl bg-[#383838] p-4 group hover:scale-105 transition duration-500"
    >
      <span className="h-16 w-16 fill-gray-300 group-hover:fill-gray-100 transition duration-500">
        {icon}
      </span>
      <span className="mt-4 text-center text-sm font-bold uppercase tracking-wider text-gray-300 group-hover:text-gray-100 transition duration-500">
        {title}
      </span>
    </Link>
  );
};

export default Card;

import type { FunctionComponent } from "react";

import ReactCardFlip from "react-card-flip";
import { Cell } from "./useBoard";

interface CardProps {
  cell: Cell;
  onClick: () => void;
}

const Card: FunctionComponent<CardProps> = ({ cell, onClick }) => {
  return (
    <ReactCardFlip isFlipped={cell.isFlipped} flipDirection="vertical">
      <div
        className="h-36 w-36 bg-[#383838] rounded-xl m-3 cursor-pointer flex items-center justify-center"
        onClick={onClick}
      >
        <img
          className="h-16 object-cover"
          src="/images/uzumaki.png"
          alt="back"
        />
      </div>
      <div
        className="h-36 w-36 bg-[#383838] rounded-xl m-3 cursor-pointer flex items-center justify-center"
        onClick={onClick}
      >
        <img className="h-32 object-cover" src={cell.image} alt="hero" />
      </div>
    </ReactCardFlip>
  );
};

export default Card;

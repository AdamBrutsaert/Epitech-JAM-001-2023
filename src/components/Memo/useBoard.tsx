import { useState } from "react";

interface Cell {
  isFlipped: boolean;
  image: string;
}

const createBoard = (width: number, height: number) => {
  return [
    [
      { isFlipped: false, image: "" },
      { isFlipped: false, image: "" },
      { isFlipped: false, image: "" },
      { isFlipped: false, image: "" },
      { isFlipped: false, image: "" },
      { isFlipped: false, image: "" },
    ],
    [
      { isFlipped: false, image: "" },
      { isFlipped: false, image: "" },
      { isFlipped: false, image: "" },
      { isFlipped: false, image: "" },
      { isFlipped: false, image: "" },
      { isFlipped: false, image: "" },
    ],
    [
      { isFlipped: false, image: "" },
      { isFlipped: false, image: "" },
      { isFlipped: false, image: "" },
      { isFlipped: false, image: "" },
      { isFlipped: false, image: "" },
      { isFlipped: false, image: "" },
    ],
    [
      { isFlipped: false, image: "" },
      { isFlipped: false, image: "" },
      { isFlipped: false, image: "" },
      { isFlipped: false, image: "" },
      { isFlipped: false, image: "" },
      { isFlipped: false, image: "" },
    ],
    [
      { isFlipped: false, image: "" },
      { isFlipped: false, image: "" },
      { isFlipped: false, image: "" },
      { isFlipped: false, image: "" },
      { isFlipped: false, image: "" },
      { isFlipped: false, image: "" },
    ],
    [
      { isFlipped: false, image: "" },
      { isFlipped: false, image: "" },
      { isFlipped: false, image: "" },
      { isFlipped: false, image: "" },
      { isFlipped: false, image: "" },
      { isFlipped: false, image: "" },
    ],
  ];
};

const useBoard = (width: number, height: number) => {
  const [board, setBoard] = useState<Cell[][]>(() =>
    createBoard(width, height)
  );

  return [board];
};

export default useBoard;

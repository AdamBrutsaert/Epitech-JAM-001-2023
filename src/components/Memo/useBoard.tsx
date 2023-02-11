import { useState } from "react";

export interface Cell {
  isFlipped: boolean;
  image: string;
}

const createBoard = (width: number, height: number) => {
  return [
    [
      { isFlipped: false, image: "/images/batman.png" },
      { isFlipped: false, image: "/images/blackhadam.png" },
      { isFlipped: false, image: "/images/batman.png" },
      { isFlipped: false, image: "/images/blackhadam.png" },
      { isFlipped: false, image: "/images/blacklightning.png" },
    ],
    [
      { isFlipped: false, image: "/images/blacklightning.png" },
      { isFlipped: false, image: "/images/blackpanther.png" },
      { isFlipped: false, image: "/images/captamerica.png" },
      { isFlipped: false, image: "/images/blackpanther.png" },
      { isFlipped: false, image: "/images/captamerica.png" },
    ],
    [
      { isFlipped: false, image: "/images/catwoman.png" },
      { isFlipped: false, image: "/images/deadpool.png" },
      { isFlipped: false, image: "/images/catwoman.png" },
      { isFlipped: false, image: "/images/deadpool.png" },
      { isFlipped: false, image: "/images/flash.png" },
    ],
    [
      { isFlipped: false, image: "/images/flash.png" },
      { isFlipped: false, image: "/images/ironman.png" },
      { isFlipped: false, image: "/images/hulk.png" },
      { isFlipped: false, image: "/images/ironman.png" },
      { isFlipped: false, image: "/images/hulk.png" },
    ],
  ];
};

const useBoard = (
  width: number,
  height: number
): [Cell[][], (row: number, column: number) => void] => {
  const [board, setBoard] = useState<Cell[][]>(() =>
    createBoard(width, height)
  );

  const flip = (row: number, column: number) => {
    setBoard((previous) => {
      let newArray = previous.map((arr) => arr.slice());
      newArray[row][column].isFlipped = !newArray[row][column].isFlipped;
      return newArray;
    });
  };

  return [board, flip];
};

export default useBoard;

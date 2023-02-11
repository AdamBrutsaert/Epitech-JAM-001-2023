import { useState } from "react";

interface Cell {
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
      { isFlipped: false, image: "/images/blackpanther.png" },
    ],
    [
      { isFlipped: false, image: "/images/blacklightning.png" },
      { isFlipped: false, image: "/images/blackpanther.png" },
      { isFlipped: false, image: "/images/captamercia.png" },
      { isFlipped: false, image: "/images/captmarvel.png" },
      { isFlipped: false, image: "/images/captamercia.png" },
      { isFlipped: false, image: "/images/captmarvel.png" },
    ],
    [
      { isFlipped: false, image: "/images/catwoman.png" },
      { isFlipped: false, image: "/images/deadpool.png" },
      { isFlipped: false, image: "/images/catwoman.png" },
      { isFlipped: false, image: "/images/deadpool.png" },
      { isFlipped: false, image: "/images/flash.png" },
      { isFlipped: false, image: "/images/hancock.png" },
    ],
    [
      { isFlipped: false, image: "/images/flash.png" },
      { isFlipped: false, image: "/images/hancock.png" },
      { isFlipped: false, image: "/images/hulk.png" },
      { isFlipped: false, image: "/images/ironman.png" },
      { isFlipped: false, image: "/images/hulk.png" },
      { isFlipped: false, image: "/images/ironman.png" },
    ],
    [
      { isFlipped: false, image: "/images/spiderman.png" },
      { isFlipped: false, image: "/images/superman.png" },
      { isFlipped: false, image: "/images/spiderman.png" },
      { isFlipped: false, image: "/images/superman.png" },
      { isFlipped: false, image: "/images/thanos.png" },
      { isFlipped: false, image: "/images/thor.png" },
    ],
    [
      { isFlipped: false, image: "/images/thanos.png" },
      { isFlipped: false, image: "/images/thor.png" },
      { isFlipped: false, image: "/images/vision.png" },
      { isFlipped: false, image: "/images/wolverine.png" },
      { isFlipped: false, image: "/images/vision.png" },
      { isFlipped: false, image: "/images/wolverine.png" },
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

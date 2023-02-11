import { useState } from "react";

import _ from "lodash";

export interface Cell {
  isFlipped: boolean;
  image: string;
}

const createBoard = () => {
  return _.shuffle([
    { isFlipped: false, image: "/images/batman.png" },
    { isFlipped: false, image: "/images/batman.png" },
    { isFlipped: false, image: "/images/blackhadam.png" },
    { isFlipped: false, image: "/images/blackhadam.png" },
    { isFlipped: false, image: "/images/blacklightning.png" },
    { isFlipped: false, image: "/images/blacklightning.png" },
    { isFlipped: false, image: "/images/captamerica.png" },
    { isFlipped: false, image: "/images/captamerica.png" },
    { isFlipped: false, image: "/images/blackpanther.png" },
    { isFlipped: false, image: "/images/blackpanther.png" },
    { isFlipped: false, image: "/images/deadpool.png" },
    { isFlipped: false, image: "/images/deadpool.png" },
    { isFlipped: false, image: "/images/catwoman.png" },
    { isFlipped: false, image: "/images/catwoman.png" },
    { isFlipped: false, image: "/images/flash.png" },
    { isFlipped: false, image: "/images/flash.png" },
    { isFlipped: false, image: "/images/hulk.png" },
    { isFlipped: false, image: "/images/hulk.png" },
    { isFlipped: false, image: "/images/ironman.png" },
    { isFlipped: false, image: "/images/ironman.png" },
  ]);
};

const turnCard = (cells: Cell[], idx: number) => {
  let copy = _.cloneDeep(cells);
  copy[idx].isFlipped = !copy[idx].isFlipped;
  return copy;
};

const useBoard = (): [Cell[], (idx: number) => void] => {
  const [board, setBoard] = useState<Cell[]>(() => createBoard());
  const [selected, setSelected] = useState<number | undefined>(undefined);
  const [active, setActive] = useState<boolean>(true);

  const flip = (idx: number) => {
    if (!active) return;
    if (selected !== undefined) {
      if (idx === selected) {
        setBoard((previous) => turnCard(previous, idx));
      } else if (board[idx].image === board[selected].image) {
        setBoard((previous) => turnCard(previous, idx));
      } else {
        setBoard((previous) => turnCard(previous, idx));
        setActive(false);

        setTimeout(() => {
          setBoard((previous) => turnCard(turnCard(previous, selected), idx));
          setActive(true);
        }, 750);
      }
      setSelected(undefined);
    } else if (!board[idx].isFlipped) {
      setSelected(idx);
      setBoard((previous) => turnCard(previous, idx));
    }
  };

  return [board, flip];
};

export default useBoard;

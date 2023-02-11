import type { FunctionComponent } from "react";
import useBoard from "components/Memo/useBoard";

import Layout from "components/Layout";
import Card from "components/Memo/Card";

const Memo: FunctionComponent = () => {
  const [board, flip] = useBoard(4, 5);

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center">
        {board.map((line, row) => {
          return (
            <div key={row} className="flex">
              {line.map((cell, column) => (
                <Card
                  key={row * 6 + column}
                  cell={cell}
                  onClick={() => {
                    flip(row, column);
                  }}
                />
              ))}
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Memo;

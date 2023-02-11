import type { FunctionComponent } from "react";
import useBoard from "components/Memo/useBoard";

import Layout from "components/Layout";
import Card from "components/Memo/Card";

const Memo: FunctionComponent = () => {
  const [board, flip] = useBoard();

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-5">
          {board.map((cell, idx) => (
            <Card
              key={idx}
              cell={cell}
              onClick={() => {
                console.log("flip called\n");
                flip(idx);
              }}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Memo;

import type { FunctionComponent } from "react";
import useBoard from "components/Memo/useBoard";

import Layout from "components/Layout";

const Memo: FunctionComponent = () => {
  const [board, setBoard] = useBoard(6, 6);

  return <Layout></Layout>;
};

export default Memo;

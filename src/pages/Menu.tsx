import type { FunctionComponent } from "react";

import Layout from "components/Layout";
import Card from "components/Menu/Card";
import { MemoIcon, QuizIcon } from "components/Icons";

const activities = [
  { href: "/memo", title: "Memo", icon: MemoIcon, id: 0 },
  { href: "/quiz", title: "Quiz", icon: QuizIcon, id: 0 },
];

const App: FunctionComponent = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {activities.map(({ id, href, title, icon }) => (
          <Card key={id} href={href} title={title} icon={icon} />
        ))}
      </div>
    </Layout>
  );
};

export default App;

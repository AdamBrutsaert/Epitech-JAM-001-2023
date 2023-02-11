import type { FunctionComponent, ReactNode } from "react";
import Layout from "./Layout";
import { MemoIcon } from "./Icons";

interface CardProps {
  icon: ReactNode;
  title: string;
  href: string;
}

const Card: FunctionComponent<CardProps> = ({ icon, title, href }) => {
  return (
    <a
      href={href}
      className="flex h-40 flex-col items-center justify-center rounded-xl bg-[#383838] p-4 group hover:scale-105 transition duration-500"
    >
      <span className="h-16 w-16 fill-gray-300 group-hover:fill-gray-100 transition duration-500">
        {icon}
      </span>
      <span className="mt-4 text-center text-sm font-bold uppercase tracking-wider text-gray-300 group-hover:text-gray-100 transition duration-500">
        {title}
      </span>
    </a>
  );
};

const activities = [{ href: "/memo", title: "Memo", icon: MemoIcon, id: 0 }];

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

import type { FunctionComponent, ReactNode } from "react";

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <div className="mx-auto grid min-h-screen w-full max-w-7xl grid-rows-[5rem,1fr,5rem] px-8">
        <header className="flex items-center justify-center">
          MY_MINIGAMES
        </header>
        <main className="my-8">{children}</main>
      </div>
    </div>
  );
};

export default Layout;

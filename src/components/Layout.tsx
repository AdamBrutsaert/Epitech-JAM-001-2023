import type { FunctionComponent, ReactNode } from "react";
import { Link } from "react-router-dom";

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <div className="mx-auto grid min-h-screen w-full max-w-7xl grid-rows-[5rem,1fr,5rem] px-8">
        <header className="flex items-center justify-center">
          <Link to="/">
            <img className="h-10" src="/images/logo_bat.png" alt="ZEBI" />
          </Link>
        </header>
        <main className="my-6 relative">{children}</main>
      </div>
    </div>
  );
};

export default Layout;

import Link from "next/link";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div>
      <header>
        <div>
          <Link href="/">
            <a>🏡</a>
          </Link>
          <span>Welcome to my blog</span>{" "}
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <div>&copy; 2022 asldkfjalksdf</div>
      </footer>
    </div>
  );
};

export default MainLayout;

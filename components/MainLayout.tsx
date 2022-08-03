import Link from "next/link";
import { FC, ReactNode } from "react";
import CoolestFuckingHeaderInTheWorld from "./CoolestFuckingHeaderInTheWorld";

interface Props {
  children: ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <CoolestFuckingHeaderInTheWorld />
      <main className="dark:prose-invert text-white ">{children}</main>
      <footer className="bg-red-400 text-center py-2 mt-auto font-bold text-3xl">
        <div>&copy;{new Date().getFullYear()} Your Name Here</div>
      </footer>
    </div>
  );
};

export default MainLayout;

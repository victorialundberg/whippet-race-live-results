import { Outlet } from "react-router-dom";
import { Menu } from "../components/Menu";

export const Layout = () => {
  return (
    <>
      <Menu></Menu>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};

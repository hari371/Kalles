import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import TopBar from "./TopBar";

function MainLayout() {
  return (
    <>
      <TopBar/>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
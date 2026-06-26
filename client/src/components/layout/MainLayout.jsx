import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import TopBar from "./TopBar";

function MainLayout() {
  return (
    <>
      <div className="xl:block hidden">
        <TopBar/>
      </div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
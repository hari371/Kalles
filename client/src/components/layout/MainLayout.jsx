import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import TopBar from "./TopBar";
import Footer from "./Footer";

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
      <Footer/>
    </>
  );
}

export default MainLayout;
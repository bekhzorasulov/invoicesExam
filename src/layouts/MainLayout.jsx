import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

function MainLayout() {
  return (
    <div className="flex h-screen overflow-hidden">
      <SideBar />
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;

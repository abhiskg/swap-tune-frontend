import { Outlet } from "react-router-dom";
import Header from "../components/ui/Header";
import SideNavbar from "../components/ui/SideNavbar";

const DashboardLayout = () => {
  return (
    <div>
      <Header />

      <div className="flex">
        <SideNavbar />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

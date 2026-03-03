import Sidebar from "./Sidebar";
import MobileDrawer from "./MobileDrawer";

function Layout({ children }) {
  return (
    <div className="flex bg-midnight text-white min-h-screen">
      <Sidebar />
      <MobileDrawer />
      <main className="flex-1 md:ml-64 p-6">{children}</main>
    </div>
  );
}

export default Layout;
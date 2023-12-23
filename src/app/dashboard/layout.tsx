import Sidebar from "../components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-11  ">
      <div className="col-auto md:col-span-3 hidden md:block">
        <Sidebar />
      </div>
      <div className="col-span-full md:col-span-8">{children}</div>
    </div>
  );
}

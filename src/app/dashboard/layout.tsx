import Sidebar from "../components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-12 ">
      <div className="col-span-3">
        <Sidebar />
      </div>
      <div className=" col-span-9">{children}</div>
    </div>
  );
}

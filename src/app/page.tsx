import Image from "next/image";
import Menu from "@/app/Menu";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-cyan-400">
        <div className="bg-white p-6 m-3 space-y-10 shadow-2xl rounded-3xl md:p-40">
          <Menu />
        </div>
      </div>
    </>
  );
}

import Image from "next/image";
import Menu from "@/app/Menu";
import Search from "@/app/Search";
import Gallery from "@/app/Gallery";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-cyan-50">
        <div className="bg-white p-6 m-3 space-y-10 shadow-2xl rounded-3xl md:p-40">
          <Menu />

          <Search />

          <Gallery />
        </div>
      </div>
    </>
  );
}

import Image from "next/image";
import Bookmark from "@/images/bookmark.svg";

const Gallery = () => {
  const imgItems = [
    "https://picsum.photos/id/41/550/428",
    "https://picsum.photos/id/42/550/428",
    "https://picsum.photos/id/43/550/428",
    "https://picsum.photos/id/44/550/428",
    "https://picsum.photos/id/45/550/428",
    "https://picsum.photos/id/46/550/428",
  ];

  return (
    <>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {imgItems.map((item: any, idx) => {
          return (
            <div key={idx} className="relative group">
              <img
                src={item}
                width={550}
                height={428}
                alt=""
                className="w-72"
              />
              <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
                <div className="flex justify-between w-full">
                  <div className="font-normal">
                    <p className="text-sm">Abstract Painting</p>
                    <p className="text-xs">245 likes - 35 shares</p>
                  </div>
                  <div className="flex items-center">
                    <Image src={Bookmark} alt="bookmark" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;

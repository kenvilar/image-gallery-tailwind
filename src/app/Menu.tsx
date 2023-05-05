const Menu = () => {
  const menuItems = ["Vector", "Illustrations", "Images", "Icons"];

  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-8 md:mb-24 md:justify-end">
        {menuItems.map((item: any, idx) => {
          return (
            <div key={idx} className="group transition-all">
              <a href="#">{item}</a>
              <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Menu;

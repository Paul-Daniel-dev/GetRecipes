import React from "react";

function Sidebar() {
  return (
    <>
      <DesktopSidebar />
      
    </>
  );
}

export default Sidebar;

const DesktopSidebar = () => {
  return (
    <div className="p-3 md:p-10 border-r min-h-screen w-24 md:w-64 hidden sm:block">
      <div className="flex flex-col gap-20 sticky top-10 left-0">
        <div className="w-full">
          <img src="/thelogo.png" alt="logo" className="hidden md:block" />
          <img src="/thelogo.png" alt="logo" className="block md:hidden" />
        </div>
        <ul className='flex flex-col items-center md:items-start gap-8'>

        </ul>
      </div>
    </div>
  );
};

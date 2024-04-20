import React from "react";
import Button from "../atoms/Button";

const Drawer = () => {
  return (
    <div className="drawer z-10   overflow-y-auto ">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      {/* <div className="drawer-content"></div> */}
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu items-center text-start  p-4 w-44 h-full bg-base-200 text-base-content opacity-80 justify-">
          <Button text={"🏠Home"} href="/"/>
          <Button text={"🏠Profile"} href="/profile"/>
          <Button text={"🏠Project"} href="/project"/>
          <Button text={"🏠Experience"} href="/experience"/>
          <Button text={"🏠Message"} href="/message"/>
          <Button text={"Dashboard"} href="/dashboard"/>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;

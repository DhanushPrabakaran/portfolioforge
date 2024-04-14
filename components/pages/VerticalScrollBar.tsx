import React, { useState } from "react";
interface VerticalScrollBarProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const VerticalScrollBar: React.FC<VerticalScrollBarProps> = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-100">
      <div className="fixed right-0 top-0 mt-4 mr-4 z-50">
        <button onClick={toggleMenu} className="focus:outline-none "></button>
      </div>
      <div
        className={`fixed top-0 right-0 h-screen bg-gray-200 ${
          isOpen ? "w-64" : "w-0"
        } overflow-y-auto transition-all duration-300 z-50`}
      >
        <div className="p-4">
          <h1 className="text-xl font-bold mb-4">Sidebar</h1>
          <ul>
            {[...Array(20)].map((_, index) => (
              <li key={index} className="mb-2">
                Item {index + 1}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`absolute top-0 right-0 h-screen w-screen bg-black opacity-25 ${
          isOpen ? "block" : "hidden"
        } z-40`}
        onClick={toggleMenu}
      ></div>
    </div>
  );
};

export default VerticalScrollBar;

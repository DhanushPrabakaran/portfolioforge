import Form from "@/components/pages/Form";
import React from "react";

const page = () => {
  return (
    <div className=" w-full h-screen grid grid-flow-col grid-cols-5 ">
      <div className=" bg-[#edf2f7] w-full h-full col-span-auto">
      {[...Array(20)].map((_, index) => (
              <div key={index} className="mb-2">
                Item {index + 1}
              </div>
            ))}
      </div>
      <div className=" w-full h-full col-span-4"><Form/></div>
    </div>
  );
};

export default page;

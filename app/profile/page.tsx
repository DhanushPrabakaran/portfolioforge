import Button from "@/components/atoms/Button";
import Form from "@/components/pages/Form";
import React from "react";

const page = () => {
  return (
    <div className="flex">
      <div className="flex-1 flex-col flex justify-center items-center">
      {[...Array(20)].map((_, index) => (
        <div key={index} className="mb-2">
          <Button text={"button"} />
        </div>
      ))}
      </div>
      <div className=" flex-auto">
        <Form />
      </div>
    </div>
  );
};

export default page;

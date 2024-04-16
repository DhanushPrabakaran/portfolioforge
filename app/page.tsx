import Home from "@/components/pages/Home";
// import HorizontalScrollBar from "@/components/pages/HorizontalScrollBar";
import Link from "next/link";
// import { auth } from "@/auth";

const page = async () => {
  // const session = await auth();
  return (
    <div>
      <Home />
      {/* <HorizontalScrollBar /> */}
    </div>
  );
};

export default page;

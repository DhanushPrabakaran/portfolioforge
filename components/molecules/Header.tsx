import Button from "@/components/atoms/Button";
import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";

const Header = async () => {
  const session = await auth();
  return (
    <nav className="bg-white w-full  ">
      <div className="md:flex items-center justify-between py-3 px-4 md:px-8">
        <div className="flex justify-between items-center w-full">
          <div className="text-2xl font-bold text-gray-800 md:text-3xl">
            <Link href="/">
              portfolio<span className="text-indigo-600">forge</span>
            </Link>
          </div>
          <div className="flex flex-row  align-middle text-center">
            {/* <Button text="Home" href="/" /> */}
            <Button text="Dashboard" href="/dashboard" />
            {session ? (
              <>
                <Button text="Signout" href="/auth/signout" />
                <Image
                  src={
                    session?.user?.image ||
                    "https://source.boringavatars.com/beam/120"
                  }
                  alt={session?.user?.name || ""}
                  width={40}
                  height={40}
                  className=" bg-cover rounded-full"
                />
              </>
            ) : (
              <Button text="Signin" href="/auth/signin" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;

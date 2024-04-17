import Link from "next/link";

const Button = ({ text, href }: { text: string; href?: string }) => {
  return (
    <Link
      href={`${href}`}
      className=" btn rounded hover:bg-gray-900 hover:text-white  hover:font-medium my-1  w-full" 
    >
      {text}
    </Link>
  );
};

export default Button;

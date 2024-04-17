import Link from "next/link";

const Button = ({ text, href }: { text: string; href?: string }) => {
  return (
    <Link
      href={`${href}`}
      className="m-1 btn rounded hover:bg-gray-900 hover:text-white  hover:font-medium py-2 px-2 md:mx-2 w-full" 
    >
      {text}
    </Link>
  );
};

export default Button;

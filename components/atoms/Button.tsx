import Link from "next/link";

const Button = ({ text, href }: { text: string; href?: string }) => {
  return (
    <Link
      href={`${href}`}
      className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
    >
      {text}
    </Link>
  );
};

export default Button;

// <Link href="#" className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">Home</Link>
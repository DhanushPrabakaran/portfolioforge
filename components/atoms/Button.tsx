import Link from "next/link";

const Button = ({ text, href }: { text: string; href?: string }) => {
  return (
    <Link
      href={`${href}`}
      className="text-base text-center font-bold px-2 py-1  rounded  bg-opacity-40 mr-4 bg-zinc-800 w-full"
    >
      {text}
    </Link>
  );
};

export default Button;

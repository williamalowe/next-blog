import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const navLinks = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/posts",
      label: "Posts",
    },
    {
      href: "/create",
      label: "Create Posts",
    },
  ];
  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      <Link href="/">
        <Image
          src="https://bytegrad.com/course-assets/youtube/example-logo.png"
          alt="Logo"
          className="w-[35px] h-[35px]"
          width="35"
          height="35"
        />
      </Link>
      <nav>
        <ul className="flex gap-x-5 text-[14px]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link className="text-zinc-400" href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

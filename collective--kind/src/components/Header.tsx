import Link from "next/link";

const Header = () => {
  return (
    <div className="container mx-auto flex justify-between items-center py-4">
      <Link href="/">Collective-Kind</Link>

      <Link href="/">Home</Link>

      <Link href="/profile">Profile</Link>

      <Link href="/global-timeline">Global Timeline</Link>

      <Link href="/notifications">Notifications</Link>
    </div>
  );
};

export default Header;

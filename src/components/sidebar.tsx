import Link from "next/link";

import { Separator } from "./ui/separator";
import { Navigation } from "./navigation";

const Sidebar = () => {
  return (
    <aside className="w-full h-full bg-neutral-100 p-4">
      <Link href="/">
        <span className="text-3xl font-semibold">Company Logo</span>
      </Link>
      <Separator className="my-4" />
      <Navigation />
    </aside>
  );
};

export default Sidebar;

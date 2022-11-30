import Link from "next/link";
import type { HeaderMenuType } from "../../../../data/menus";

export default function NavItem({ name, path }: HeaderMenuType) {
  return (
    <li>
      <Link href="/">
        <a>
          { name }
        </a>
      </Link>
    </li>
  );
};
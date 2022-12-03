import { FooterMapType } from "../../../data/menus";
import Link from "next/link";

interface FooterMapProps {
  data : FooterMapType,
}

export default function FooterMap({ data }: FooterMapProps) {
  return (
    <div>
      <ul>
        <li>{ data.title }</li>
        {
          data.menus.map((menu, idx) => {
            return (
              <li key={menu.name}>
                <Link href={menu.path}>
                  {menu.name}
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};
import NavItem from "../NavItem";
import {headerMenus, HeaderMenuType} from "../../../../data/menus";

export default function NavBar() {
  return (
    <ul>
      {
        headerMenus.map((menu, idx) => {
          return (
            <NavItem key={menu.name} name={menu.name} path={menu.path} />
          );
        })
      }
    </ul>
  );
};
import { FC } from "react";
import { MenuProps } from "./menu.types";

const Menu: FC<MenuProps> = ({ item }) => {
  return (
    <div>
      {item.title && item.title}
      {item.items &&
        item.items.map((item) => <Menu key={item.id} item={item} />)}
    </div>
  );
};

export default Menu;

import {FC} from "react";
import Link from "next/link";
import {MenuBarItemProps} from "@components/menu-bar/menu-bar-item/menu-bar-item.types";

const MenuBarItem: FC<MenuBarItemProps> = ({item}) => {
    const { title, path } = item

    return path ? (
        <Link href={path}>{title}</Link>
    ) : (
        <button>{title}</button>
    )
}

export default MenuBarItem;
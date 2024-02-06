"use client"

import {FC, useState} from "react";
import cn from "classnames";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { MenuProps } from "./menu.types";
import styles from "./menu.module.scss";

const lato = Montserrat({
  weight: "600",
  subsets: ['cyrillic']
})

const Menu: FC<MenuProps> = ({ item, level = 0 }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const title = () => {
    const classes = cn(styles.title, lato.className);
    if (!item.title) return null;
    if (item.items) return <button className={classes} onClick={() => setExpanded((prev => !prev))}>{item.title}</button>;
    if (item.path) return <Link className={classes} href={item.path}>{item.title}</Link>;
    return <span className={classes}>{item.title}</span>;
  };

  return (
    <div
      className={`${styles["menuItemLevel" + level]}`}
    >
      {title()}
      {item.items && (
        <div className={cn(styles.menuItems, styles["menuItemsLevel" + level], {[styles.expanded]: expanded})}>
          {item.items.map((item) => (
            <Menu key={item.id} item={item} level={level + 1}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;

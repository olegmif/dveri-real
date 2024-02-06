"use client"

import {FC, useState} from "react";
import { MenuProps } from "./menu.types";
import Link from "next/link";
import styles from "./menu.module.css";

const Menu: FC<MenuProps> = ({ item, level = 0 }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const title = () => {
    if (!item.title) return null;
    if (item.items) return <button onClick={() => setExpanded((prev => !prev))}>{item.title}</button>;
    if (item.path) return <Link href={item.path}>{item.title}</Link>;
    return <span>{item.title}</span>;
  };

  return (
    <div
      className={`${styles["menuItemLevel" + level]}`}
    >
      {title()}
      {item.items && (
        <div className={`${styles.menuItems} ${styles["menuItemsLevel" + level]} ${expanded ? styles.expanded : ''}`}>
          {item.items.map((item) => (
            <Menu key={item.id} item={item} level={level + 1}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;

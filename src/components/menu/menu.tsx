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

const Menu: FC<MenuProps> = ({ item, level = 0, onClick , expanded = false}) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleExpand = (id: string): void => {
      setExpandedId(id === expandedId ? null : id);
  }

  const title = () => {
    if (!item.title) return null;

    const classes = cn(styles.title, lato.className);

    return item.path ? <Link className={classes} href={item.path}>{item.title}</Link> :
      <button className={classes} onClick={() => onClick && onClick(item.id)}>{item.title}</button>;
  };

  return (
    <div
      className={`${styles.item} ${styles["level" + level]}`}
    >
      {title()}
      {item.items && (
        <div className={cn(styles.items, styles["level" + level], {[styles.expanded]: expanded})}>
          {item.items.map((item) => (
            <Menu key={item.id} item={item} level={level + 1} onClick={handleExpand} expanded={item.id === expandedId}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;

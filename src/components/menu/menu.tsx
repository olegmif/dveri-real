"use client"

import {FC, useState} from "react";
import cn from "classnames";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { MenuProps } from "./menu.types";
import styles from "./menu.module.scss";
import Card from "@components/card/card";

const montserrat = Montserrat({
  subsets: ['cyrillic']
})

const Menu: FC<MenuProps> = ({ item, level = 0, onClick , expanded = false}) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleExpand = (id: string): void => {
      setExpandedId(id === expandedId ? null : id);
  }

  const renderTitle = () => {
    if (!item.title) return null;

    const classes = cn(styles.title, montserrat.className);

    return item.path ? <Link className={classes} href={item.path}>{item.title}</Link> :
      <button className={classes} onClick={() => onClick && onClick(item.id)}>{item.title}</button>;
  };

  const renderItems = () => item.items?.map((item) => (
      <Menu key={item.id} item={item} level={level + 1} onClick={handleExpand} expanded={item.id === expandedId}/>
  )) || null;

  const itemsClasses = cn(styles.items, styles["level" + level], {[styles.expanded]: expanded});

  return (
    <div
      className={`${styles.item} ${styles["level" + level]}`}
    >
      {renderTitle()}
      {item.items && (
        level !== 2 ? <Card className={itemsClasses}>{renderItems()}</Card> : <div className={itemsClasses}>{renderItems()}</div>
      )}
    </div>
  );
};

export default Menu;

import { FC } from "react";
import { MenuProps } from "./menu.types";
import Link from "next/link";
import styles from "./menu.module.css";

const Menu: FC<MenuProps> = ({ item }) => {
  const title = () => {
    if (!item.title) return null;
    if (item.items) return <button>{item.title}</button>;
    if (item.path) return <Link href={item.path}>{item.title}</Link>;
    return <span>{item.title}</span>;
  };

  return (
    <div
      className={`${styles.menu} ${item.className ? styles[item.className] : ""}`}
    >
      {title()}
      {item.items && (
        <div className={styles.items}>
          {item.items.map((item) => (
            <Menu key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;

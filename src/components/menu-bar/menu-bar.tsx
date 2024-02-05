import MenuBarItem from "@components/menu-bar/menu-bar-item/menu-bar-item";
import {MENU} from "@components/menu-bar/menu-bar.const";

const MenuBar = () => {
    return <div>{MENU.map(item => <MenuBarItem key={item.id} item={item} />)}</div>
}

export default MenuBar;
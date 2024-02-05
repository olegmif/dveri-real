import { MENU } from "@/data/menu.const";
import Menu from "@components/menu/menu";

const Header = () => {
    return (
        <div>
            <Menu item={MENU} />
        </div>
    );
};

export default Header;

import { MENU } from "@/data/menu.const";
import Menu from "@components/menu/menu";
import Container from "@components/container/container";

const Header = () => {
    return (
        <Container>
            <Menu item={MENU} />
        </Container>
    );
};

export default Header;

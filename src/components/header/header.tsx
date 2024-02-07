import {MENU} from "@/data/menu.const";
import Menu from "@components/menu/menu";
import Container from "@components/container/container";
import Card from "@components/card/card";
import styles from "./header.module.scss";

const Header = () => {
    return (
        <Container>
            <div className={styles.menuBar}>
                <Menu item={MENU}/>
            </div>
        </Container>
    );
};

export default Header;

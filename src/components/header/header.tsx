import {MENU} from "@/data/menu.const";
import Menu from "@components/menu/menu";
import Container from "@components/container/container";

import styles from "./header.module.scss";
import Logo from "@components/logo/logo";
import Card from "@components/card/card";

const Header = () => {
    return (
        <Container>
            <Card>
                <div>
                    <Logo/>
                </div>
                <div className={styles.menuBar}>
                    <Menu item={MENU}/>
                </div>
            </Card>
        </Container>
    );
};

export default Header;

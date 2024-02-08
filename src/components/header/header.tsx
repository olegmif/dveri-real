import {MENU} from "@/data/menu.const";
import Menu from "@components/menu/menu";
import Container from "@components/container/container";

import styles from "./header.module.scss";
import Logo from "@components/logo/logo";
import Card from "@components/card/card";
import Button from "@components/button/button";

const Header = () => {
    return (
        <Container>
            <Card>
                <div className={styles.contentBar}>
                    <Logo/>
                    <Button type="primary">Вызвать замерщика</Button>
                </div>
                <div className={styles.menuBar}>
                    <Menu item={MENU}/>
                </div>
            </Card>
        </Container>
    );
};

export default Header;

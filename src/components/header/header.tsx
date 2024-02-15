import Container from "@components/container/container";
import styles from "./header.module.scss";
import Logo from "@components/logo/logo";
import Card from "@components/card/card";
import Button from "@components/button/button";
import ChatIcon from "@components/icons/chat";
import {Montserrat} from "next/font/google";
import cn from "classnames";
import {HeaderProps} from "@components/header/header.types";
import {FC} from "react";
import Menu from "@components/menu/menu";
import {MENU} from "@/data/menu.const";

const montserrat = Montserrat({
    subsets: ['cyrillic']
})

const Header: FC = () => {
    return (
        <Container>
            <Card>
                <div className={styles.contentBar}>
                    <Logo/>
                    <Button type="primary">Вызвать замерщика</Button>
                    <div className={styles.phone}>
                        <a className={styles.link} href={"tel:+7000000"}><span className={cn(montserrat.className, styles.text)}>+7 (XXX) XXX-XX-XX</span></a>
                        <button className={cn(styles.button, styles.text)}>заказать звонок</button>
                    </div>
                    <Button className={styles.chatButton} type="primary" shape="rounded"><ChatIcon /></Button>
                </div>
                <div className={styles.menuBar}>
                    <Menu item={MENU}/>
                </div>
            </Card>
        </Container>
    );
};

export default Header;

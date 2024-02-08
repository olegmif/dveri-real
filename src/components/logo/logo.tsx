import {FC} from "react";
import Image from "next/image";
import cn from "classnames";
import {Ubuntu} from "next/font/google";
import logo from "./logo.svg";
import styles from "./logo.module.scss";

const ubuntu = Ubuntu({
    weight: "500",
    subsets: ['cyrillic']
})

const Logo: FC = () => {
    return (
        <div className={styles.wrapper}>
            <Image className={styles.logo} src={logo} alt={"logo"} width={31} height={40} />
            <span className={cn(ubuntu.className)}>настоящие двери</span>
        </div>
    )
}

export default Logo;
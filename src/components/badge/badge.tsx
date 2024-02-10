import {FC} from "react";
import {BadgeProps} from "@components/badge/badge.types";
import {Montserrat} from "next/font/google";
import cn from "classnames";
import styles from "./badge.module.scss";

const montserrat = Montserrat({
    subsets: ['cyrillic']
})

const Badge: FC<BadgeProps> = ({text, color}) => {
    return <div className={cn(montserrat.className, styles.badge)} style={{backgroundColor: color}}>{text}</div>
}

export default Badge;
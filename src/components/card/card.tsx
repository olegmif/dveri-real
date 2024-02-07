import {FC, PropsWithChildren} from "react";
import styles from "./card.module.scss";
import cn from "classnames";
import {CardProps} from "@components/card/card.types";

const Card: FC<CardProps> = ({className, children, ...rest}) => {
    return <div {...rest} className={cn(className, styles.card)}>{children}</div>
}

export default Card;
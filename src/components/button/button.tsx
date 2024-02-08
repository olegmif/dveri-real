import {FC} from "react";
import cn from "classnames";
import {ButtonProps} from "@components/button/button.types";
import styles from "./button.module.scss";
import {Montserrat} from "next/font/google";

const montserrat = Montserrat({
    subsets: ['cyrillic']
})

const Button: FC<ButtonProps> = ({children, className, type = "secondary", shape = "round", ...rest}) => {
    return <button {...rest} className={cn(styles.button, montserrat.className, {
        [styles.rounded]: shape === "rounded",
        [styles.round]: shape === "round",
        [styles.primary]: type === "primary",
        [styles.secondary]: type === "secondary",
    }, className,)}>{children}</button>
}

export default Button;
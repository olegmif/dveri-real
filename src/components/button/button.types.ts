import {HTMLAttributes, ReactNode} from "react";
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    type?: "primary" | "secondary";
    shape?: "round" | "rounded";
}
import {FC} from "react";
import Image from "next/image";
import {Montserrat} from "next/font/google";
import cn from "classnames";
import {CatalogCardProps} from "@components/catalog-card/catalog-card.types";
import Card from "@components/card/card";
import styles from "./catalog-card.module.scss";
import Badge from "@components/badge/badge";
import Button from "@components/button/button";
import CompareIcon from "@components/icons/compare";
import HeartIcon from "@components/icons/heart";

const montserrat = Montserrat({
    subsets: ['cyrillic']
})

const CatalogCard: FC<CatalogCardProps> = ({product}) => {
    const {title, image, size, finishing, price, oldPrice, discount} = product;

    const bestsellerBadge = product.bestseller ? <Badge text={"Хит"} color="#8826bf"/> : null;
    const soldBadge = product.sold ? <Badge text={`Купили ${product.sold} раз`} color="#29ad2e"/> : null;
    const discountBadge = product.discount ? <Badge text={`Скидика`} color="#d02129"/> : null;

    return (
        <Card className={styles.catalogCard}>
            <div className={styles.image}>
                <Image src={image} width={265} height={265} alt={"door photo"}/>
                <div className={styles.topBadges}>
                    {bestsellerBadge}
                    {soldBadge}
                    {discountBadge}
                </div>
                {product.refund && <div className={styles.bottomBadge}>
                    <Badge text={product.refund} color="#ea0e18" />
                </div>}
            </div>
            <div className={cn(montserrat.className, styles.features)}>
                <span className={styles.title}>{title}</span>
                <div className={styles.detailsWrapper}>
                    <span className={styles.details}>{`Размер: ${size}`}</span>
                    <span className={styles.details}>{`Отделка: ${finishing}`}</span>
                </div>
                <div className={cn(styles.hasDiscount, styles.priceWrapper)}>
                    <span className={styles.price}>{price}</span>
                    {oldPrice && <span className={styles.oldPrice}>{oldPrice}</span>}
                    {discount && <Badge text={discount} color={"#ea0e18"}/>}
                </div>
            </div>
            <div className={styles.actions}>
                <Button shape="round" type="primary">Купить в 1 клик</Button>
                <Button className={styles.compareButton} shape="rounded" type="transparent"><CompareIcon /></Button>
                <Button className={styles.favoritesButton} shape="rounded" type="transparent"><HeartIcon /></Button>
            </div>
        </Card>
    )
}

export default CatalogCard;

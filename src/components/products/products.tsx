import {FC} from "react";
import CatalogCard from "@components/catalog-card/catalog-card";
import Container from "@components/container/container";
import {PRODUCTS} from "@/data/products.const";
import styles from "./products.module.scss";

const Products: FC = () => {
    return (
        <Container>
            <div className={styles.products}>
                {PRODUCTS.map(product => <CatalogCard key={product.id} product={product} />)}
            </div>
        </Container>
    )
}

export default Products;
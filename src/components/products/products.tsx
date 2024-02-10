import {FC} from "react";
import CatalogCard from "@components/catalog-card/catalog-card";
import Container from "@components/container/container";
import {PRODUCTS} from "@/data/products.const";

const Products: FC = () => {
    return (
        <Container>
            {PRODUCTS.map(product => <CatalogCard key={product.id} product={product} />)}
        </Container>
    )
}

export default Products;
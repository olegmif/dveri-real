export type Product = {
    id: string;
    title: string;
    image: string;
    size: string;
    finishing: string;
    bestseller?: boolean, // хит продаж
    price: number,
    oldPrice: number,
    discount: number,
    refund: number,
    sold?: number // продано N раз
}
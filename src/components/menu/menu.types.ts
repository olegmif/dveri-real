export type MenuItem = {
  id: string;
  className?: string;
  title?: string;
  path?: string;
  items?: MenuItems;
};

export type CatalogMenuItem = MenuItem & {
  count: number;
  minPrice: number;
};

export type MenuItems = Array<MenuItem | CatalogMenuItem>;

export interface MenuProps {
  item: MenuItem | CatalogMenuItem;
}

export type MenuItem = {
  id: string;
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
  level?: number;
  item: MenuItem | CatalogMenuItem;
}

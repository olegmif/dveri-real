import {CatalogMenuItem, MenuItem} from "@/types/menu.types";

export interface MenuProps {
  level?: number;
  item: MenuItem | CatalogMenuItem;
  onClick?: (id: string) => void;
  expanded?: boolean;
}

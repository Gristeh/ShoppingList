import { ListItem } from "./list-item";

export class ShoppingList {
  ShoppingListName: String;
  ShoppingListItems: ListItem[];

  constructor(shoppingListName) {
    this.ShoppingListName = shoppingListName;
    this.ShoppingListItems = [];
  }
}

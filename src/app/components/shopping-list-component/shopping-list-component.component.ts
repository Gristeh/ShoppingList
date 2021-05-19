import { Component, OnInit } from "@angular/core";
import { ListItem } from "src/app/models/list-item";
import { ShoppingList } from "src/app/models/shopping-list";

@Component({
  selector: "app-shopping-list-component",
  templateUrl: "./shopping-list-component.component.html",
  styleUrls: ["./shopping-list-component.component.css"],
})
export class ShoppingListComponentComponent implements OnInit {
  selectedItem: ListItem;
  currentItemList: ShoppingList;
  currentItemListItems: ListItem[];
  previousItemList: ListItem[];

  constructor() {
    this.previousItemList = [
      {
        ItemID: 1,
        ItemName: "Bananas",
        ListID: 1,
        HighPriority: false,
        Index: 0,
      },
      {
        ItemID: 2,
        ItemName: "Biscuits",
        ListID: 1,
        HighPriority: false,
        Index: 1,
      },
      {
        ItemID: 3,
        ItemName: "Bread",
        ListID: 1,
        HighPriority: true,
        Index: 2,
      },
      {
        ItemID: 4,
        ItemName: "Cereal",
        ListID: 1,
        HighPriority: false,
        Index: 3,
      },
      {
        ItemID: 5,
        ItemName: "Milk",
        ListID: 1,
        HighPriority: true,
        Index: 4,
      },
      {
        ItemID: 6,
        ItemName: "Sugar",
        ListID: 1,
        HighPriority: false,
        Index: 5,
      },
      {
        ItemID: 7,
        ItemName: "Tea bags",
        ListID: 1,
        HighPriority: false,
        Index: 6,
      },
    ];
  }

  ngOnInit() {
    this.currentItemList = new ShoppingList("16/05/21");
    this.currentItemListItems = this.currentItemList.ShoppingListItems;
  }

  // Sets selectedItem to an item when clicked in either list.
  onSelect(item: ListItem): void {
    this.selectedItem = item;
  }

  // Adds selected item to current shopping list and removes it from previous list.
  addItem(): void {
    if (!this.currentItemListItems.includes(this.selectedItem)) {
      this.currentItemListItems.push(this.selectedItem);
    }
    for (var i = 0; i < this.previousItemList.length; i++) {
      if (this.previousItemList[i] === this.selectedItem) {
        this.previousItemList.splice(i, 1);
        i--;
      }
    }
  }

  // Adds selected item to previous list and removes it from current shopping list.
  removeItem(): void {
    if (!this.previousItemList.includes(this.selectedItem)) {
      this.previousItemList.push(this.selectedItem);
    }
    for (var i = 0; i < this.currentItemListItems.length; i++) {
      if (this.currentItemListItems[i] === this.selectedItem) {
        this.currentItemListItems.splice(i, 1);
        i--;
      }
    }
  }

  // Adds a new item to the Current shopping list. If item with same name exists user is warned
  createItem(itemName: string) {
    let newItemID =
      this.previousItemList.length + this.currentItemListItems.length + 1;
    let newIndex = newItemID - 1;
    let newItemName = prompt("Please enter a new item:");
    if (newItemName != "") {
      let newItem = new ListItem(newItemID, newItemName, 1, false, newIndex);
      if (
        !this.isItemPresent(this.currentItemListItems, newItemName) &&
        !this.isItemPresent(this.previousItemList, newItemName)
      ) {
        this.selectedItem = newItem;
        this.currentItemListItems.push(newItem);
      } else {
        alert("Item already Exists!");
      }
    } else {
      alert("Please enter a valid name:");
    }
  }

  // Check if listItem.itemName already exists within an array
  isItemPresent(anArray: any[], anItemName: String): boolean {
    if (anArray.some((ListItem) => ListItem.ItemName === anItemName)) {
      return true;
    }
  }

  // Edits existing item
  editItem(): void {
    let newName = prompt(
      "Please edit the item name:",
      this.selectedItem.ItemName
    );
    if ((newName = "")) {
      alert("Please enter a valid name:");
    } else if (
      !this.isItemPresent(this.currentItemListItems, newName) &&
      !this.isItemPresent(this.previousItemList, newName)
    ) {
      alert("Item already Exists!");
    } else {
      this.selectedItem.ItemName = newName;
    }
  }
}

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
  previousItemList: ListItem[];

  constructor() {
    {
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
      console.log(this.previousItemList);
    }
  }

  ngOnInit() {
    // CALL LISTS HERE
    this.currentItemList = new ShoppingList("16/05/21");
    console.log(this.currentItemList);
  }
}

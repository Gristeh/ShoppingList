import { Component, OnInit } from "@angular/core";
import { ListItem } from "src/app/models/list-item";

@Component({
  selector: "app-shopping-list-component",
  templateUrl: "./shopping-list-component.component.html",
  styleUrls: ["./shopping-list-component.component.css"],
})
export class ShoppingListComponentComponent implements OnInit {
  // currentItemList: ListItem[] = [];
  // previousItemList: ListItem[] = [];

  constructor() {
    // this.previousItemList=[ItemID: number;
    //   ItemName: string;
    //   ListID: number;
    //   HighPriority: boolean;
    //   Index:]
  }

  ngOnInit() {}
}

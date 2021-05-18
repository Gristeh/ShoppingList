export class ListItem {
  ItemID: number;
  ItemName: string;
  ListID: number;
  HighPriority: boolean;
  Index: number;

  constructor(
    itemID: number,
    itemName: string,
    listID: number,
    highPriority: boolean,
    index: number
  ) {
    this.ItemID = itemID;
    this.ItemName = itemName;
    this.ListID = listID;
    this.HighPriority = highPriority;
    this.Index = index;
  }
}

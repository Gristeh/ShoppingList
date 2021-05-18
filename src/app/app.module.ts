import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListItem } from "./models/list-item";
import { ShoppingListComponentComponent } from "./components/shopping-list-component/shopping-list-component.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, ShoppingListComponentComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

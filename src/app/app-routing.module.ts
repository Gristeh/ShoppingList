import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponentComponent } from './components/shopping-list-component/shopping-list-component.component';


const routes: Routes = [{path: 'list', component: ShoppingListComponentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

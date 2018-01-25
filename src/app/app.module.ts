import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CategorySelectorComponent } from './category-selector/category-selector.component';
import {FormsModule} from '@angular/forms';
import {TreeModule} from 'angular-tree-component';


@NgModule({
  declarations: [
    AppComponent,
    CategorySelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

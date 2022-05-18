import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppComponent } from './app.component';

import { ModelModule } from "./model/model.module";
import { CoreModule } from "./core/core.module";
import { TableComponent } from "./core/table.component";
import { FormComponent } from "./core/form.component";
import { MessageModule } from "./messages/message.module";
import { MessageComponent } from "./messages/message.component";

@NgModule({
  declarations: [],
  imports: [BrowserModule, ModelModule, CoreModule, MessageModule],
  providers: [],
  bootstrap: [TableComponent, FormComponent, MessageComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProductComponent } from './component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductTableComponent } from "./components/productTable.component";
import { ProductFormComponent } from "./components/productForm.component";
//import { PaToggleView } from "./toggleView.component";

import { LOCALE_ID } from "@angular/core";
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

// import { PaDiscountDisplayComponent } from "./discountDisplay.component";
// import { PaDiscountEditorComponent } from "./discountEditor.component";
// import { DiscountService } from "./discount.service";
// import { PaDiscountPipe } from "./discount.pipe";
// import { PaDiscountAmountDirective } from "./discountAmount.directive";
// import { SimpleDataSource } from "./datasource.model";
// import { Model } from "./repository.model";
// import { LogService, LOG_SERVICE, SpecialLogService,
//     LogLevel, LOG_LEVEL} from "./log.service";
// import { VALUE_SERVICE, PaDisplayValueDirective} from "./valueDisplay.directive";
import { ModelModule } from "./model/model.module";
import { CommonModule } from "./common/common.module";
import { ComponentsModule } from "./components/components.module";

// let logger = new LogService();
// logger.minimumLevel = LogLevel.DEBUG; 

registerLocaleData(localeFr);

@NgModule({
    declarations: [ProductComponent],  
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule, ReactiveFormsModule, ModelModule, CommonModule,
        ComponentsModule
    ],
    // providers: [DiscountService, LogService,
    //     { provide: VALUE_SERVICE, useValue: "Apples" }],      
    bootstrap: [ProductFormComponent, ProductTableComponent]
})
export class AppModule { }
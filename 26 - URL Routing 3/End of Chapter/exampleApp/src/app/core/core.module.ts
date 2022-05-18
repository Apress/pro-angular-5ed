import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { TableComponent } from "./table.component";
import { FormComponent } from "./form.component";
//import { SharedState } from "./sharedState.service";
import { ValidationHelper } from "./validation_helper";
import { ValidationErrorsDirective } from "./validationErrors.directive";
import { HiLowValidatorDirective } from "../validation/hilow";
import { RouterModule } from "@angular/router";
import { ProductCountComponent } from "./productCount.component";
import { CategoryCountComponent } from "./categoryCount.component";
import { NotFoundComponent } from "./notFound.component";
import { UnsavedGuard } from "./unsaved.guard";

@NgModule({
    imports: [BrowserModule, FormsModule, ModelModule, ReactiveFormsModule, 
        RouterModule],
    declarations: [TableComponent, FormComponent, ValidationHelper, 
        ValidationErrorsDirective, HiLowValidatorDirective, ProductCountComponent, 
        CategoryCountComponent, NotFoundComponent],
    exports: [ModelModule, TableComponent, FormComponent],
    providers: [UnsavedGuard]
})
export class CoreModule { }

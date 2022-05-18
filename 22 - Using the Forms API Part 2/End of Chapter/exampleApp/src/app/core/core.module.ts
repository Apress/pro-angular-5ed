import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { TableComponent } from "./table.component";
import { FormComponent } from "./form.component";
import { SharedState } from "./sharedState.service";
import { ValidationHelper } from "./validation_helper";
import { ValidationErrorsDirective } from "./validationErrors.directive";
import { HiLowValidatorDirective } from "../validation/hilow";

@NgModule({
    imports: [BrowserModule, FormsModule, ModelModule, ReactiveFormsModule],
    declarations: [TableComponent, FormComponent, ValidationHelper, 
        ValidationErrorsDirective, HiLowValidatorDirective],
    exports: [ModelModule, TableComponent, FormComponent],
    providers: [SharedState]
})
export class CoreModule { }

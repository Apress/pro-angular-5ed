import { Component, ElementRef, Input, ViewChild } from "@angular/core";

@Component({
    selector: "customButton",
    templateUrl: "customButton.component.html",
    styleUrls: ["customButton.component.scss"]
})
export class CustomButton {
 
    @Input("themeColor")
    themeColor: string = "primary"

    @ViewChild("buttonTarget")
    button?: ElementRef

    ngAfterViewInit() {
        this.button?.nativeElement.classList.add(`custom-button-${this.themeColor}`);
    }
}

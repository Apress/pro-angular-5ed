import { ApplicationRef, Component } from "@angular/core";
import { Model } from "./repository.model";
import { Product } from "./product.model";

@Component({
    selector: "app",
    templateUrl: "template.html"
})
export class ProductComponent {
    model: Model = new Model();

    constructor(ref: ApplicationRef) {
        (<any>window).appRef = ref;
        (<any>window).model = this.model;
    }

    getProductByPosition(position: number): Product {
        return this.model.getProducts()[position];
    }

    getClassesByPosition(position: number): string {
        let product = this.getProductByPosition(position);
        return "p-2 " + ((product?.price ?? 0) < 50 ? "bg-info" : "bg-warning");
    }

    // getClasses(key: number): string {
    //     let product = this.model.getProduct(key);
    //     return "p-2 " + ((product?.price ?? 0) < 50 ? "bg-info" : "bg-warning");
    // }

    // getStyles(key: number) {
    //     let product = this.model.getProduct(key);
    //     return {
    //         fontSize: "30px",
    //         "margin.px": 100,
    //         color: (product?.price?? 0) > 50 ? "red" : "green"
    //     };
    // }
}

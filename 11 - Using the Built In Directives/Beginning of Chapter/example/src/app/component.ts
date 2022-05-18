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

    // getClassesByPosition(position: number): string {
    //     let product = this.getProductByPosition(position);
    //     return "p-2 " + ((product?.price ?? 0) < 50 ? "bg-info" : "bg-warning");
    // }

    getProduct(key: number): Product | undefined {
        return this.model.getProduct(key);
    }

    getProducts(): Product[] {
        return this.model.getProducts();
    }

    getProductCount(): number {
        return this.getProducts().length;
    }

    targetName: string = "Kayak";
}

import { Component, Input, QueryList, ViewChildren } from "@angular/core";
import { Model } from "./repository.model";
import { Product } from "./product.model";
//import { Subject } from "rxjs";
import { DiscountService } from "./discount.service";
import { LogService } from "./log.service";

@Component({
    selector: "paProductTable",
    templateUrl: "productTable.component.html",
    providers:[LogService]        
})
export class ProductTableComponent {

    constructor(private dataModel: Model) { }

    // @Input("model")
    // dataModel: Model | undefined;

    getProduct(key: number): Product | undefined {
        return this.dataModel?.getProduct(key);
    }

    getProducts(): Product[] | undefined {
        return this.dataModel?.getProducts();
    }

    deleteProduct(key: number) {
        this.dataModel?.deleteProduct(key);
    }

    taxRate: number = 0;
    categoryFilter: string | undefined;
    itemCount: number = 3;
}

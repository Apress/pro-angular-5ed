import { Component, Input, QueryList, ViewChildren } from "@angular/core";
import { Model } from "../model/repository.model";
import { Product } from "../model/product.model";
import { DiscountService } from "../common/discount.service";
import { LogService } from "../common/log.service";

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

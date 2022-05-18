import { Component, Input, QueryList, ViewChildren } from "@angular/core";
import { Model } from "./repository.model";
import { Product } from "./product.model";
import { Subject } from "rxjs";

@Component({
    selector: "paProductTable",
    templateUrl: "productTable.component.html"
})
export class ProductTableComponent {

    @Input("model")
    dataModel: Model | undefined;

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

    selectMap = {
        "Watersports": "stay dry", 
        "Soccer": "score goals",
        "other": "have fun"    
   }

    numbers: Subject<number> = new Subject<number>();

    ngOnInit() {
        let counter = 100;
        setInterval(() => { 
            this.numbers.next(counter += 10) 
        }, 1000);
    }
}

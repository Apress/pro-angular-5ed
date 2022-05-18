import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "paTable",
    templateUrl: "table.component.html"
})
export class TableComponent {
    category: string | null = null;

    constructor(public model: Model, activeRoute: ActivatedRoute) {
        activeRoute.params.subscribe(params => {
            this.category = params["category"] || null;
        })
    }

    getProduct(key: number): Product | undefined {
        return this.model.getProduct(key);
    }

    getProducts(): Product[] {
        return this.model.getProducts()
            .filter(p => this.category == null || p.category == this.category);
    }

    get categories(): (string) [] {
        return (this.model.getProducts()
            .map(p => p.category)
            .filter((c, index, array) => c != undefined 
                && array.indexOf(c) == index)) as string[];
    }

    deleteProduct(key?: number) {
        if (key != undefined) {
            this.model.deleteProduct(key);
        }
    }
}

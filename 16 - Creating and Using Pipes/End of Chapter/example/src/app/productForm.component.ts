import { Component, Output, EventEmitter, ViewEncapsulation } from "@angular/core";
import { Product } from "./product.model";

@Component({
    selector: "pa-productform",
    templateUrl: "productForm.component.html",
    // styleUrls: ["productForm.component.css"],
    // encapsulation: ViewEncapsulation.ShadowDom                   
})
export class ProductFormComponent {
    newProduct: Product = new Product();

    @Output("paNewProduct")
    newProductEvent = new EventEmitter<Product>();

    submitForm(form: any) {
        this.newProductEvent.emit(this.newProduct);
        this.newProduct = new Product();
        form.resetForm();
    }
}

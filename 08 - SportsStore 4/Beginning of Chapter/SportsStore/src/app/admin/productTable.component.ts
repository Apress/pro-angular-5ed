import { Component, IterableDiffer, IterableDiffers, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";

@Component({
    templateUrl: "productTable.component.html"
})
export class ProductTableComponent {
    colsAndRows: string[] = ['id', 'name', 'category', 'price', 'buttons'];

    dataSource = new MatTableDataSource<Product>(this.repository.getProducts());
    differ: IterableDiffer<Product>;

    @ViewChild(MatPaginator)
    paginator? : MatPaginator

    constructor(private repository: ProductRepository, differs: IterableDiffers) { 
        this.differ = differs.find(this.repository.getProducts()).create();
    }

    ngDoCheck() {
        let changes = this.differ?.diff(this.repository.getProducts());
        if (changes != null) {
            this.dataSource.data = this.repository.getProducts();
        }        
    }

    ngAfterViewInit() {
        if (this.paginator) {
            this.dataSource.paginator = this.paginator;
        }
    }    

    deleteProduct(id: number) {
        this.repository.deleteProduct(id);
    }    
}

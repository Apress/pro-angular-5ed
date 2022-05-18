import { Component, ElementRef, ViewChild } from "@angular/core";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model";
import { ActivatedRoute } from "@angular/router";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";

@Component({
    selector: "paTable",
    templateUrl: "table.component.html",
})
export class TableComponent {
    category: string | null = null;
    dataSource: MatTableDataSource<Product>;

    constructor(public model: Model, activeRoute: ActivatedRoute) {
        activeRoute.params.subscribe(params => {
            this.category = params["category"] || null;
        })
        this.dataSource = new MatTableDataSource<Product>();
        this.model.getProductsObservable().subscribe(newData => {
            this.dataSource.data = newData;
        })
    }

    getProduct(key: number): Product | undefined {
        return this.model.getProduct(key);
    }

    getProducts(): MatTableDataSource<Product> {
        return this.dataSource;
    }

    deleteProduct(key?: number) {
        if (key != undefined) {
            this.model.deleteProduct(key);
        }
    }

    colsAndRows: string[] = ['id', 'name', 'category', 'price', 'details', 'buttons'];

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }    
}

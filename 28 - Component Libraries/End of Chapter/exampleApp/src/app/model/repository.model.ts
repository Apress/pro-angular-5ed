import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { StaticDataSource } from "./static.datasource";
import { Observable, ReplaySubject } from "rxjs";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class Model {
    private products: Product[];
    private locator = (p: Product, id?: number) => p.id == id;
    private replaySubject: ReplaySubject<Product[]>;

    constructor(private dataSource: RestDataSource) {
        this.products = new Array<Product>();
        this.replaySubject = new ReplaySubject<Product[]>(1);
        this.dataSource.getData().subscribe(data => {
            this.products = data
            this.replaySubject.next(data);
            //this.replaySubject.complete();
        });
    }

    getProducts(): Product[] {
        return this.products;
    }

    getProduct(id: number): Product | undefined {
        return this.products.find(p => this.locator(p, id));
    }

    getProductObservable(id: number): Observable<Product | undefined> {
        let subject = new ReplaySubject<Product | undefined>(1);
        this.replaySubject.subscribe(products => {
            subject.next(products.find(p => this.locator(p, id)));
            subject.complete();
        });
        return subject;
    }

    getProductsObservable(): Observable<Product[]> {
        return this.replaySubject;
    }

    getNextProductId(id?: number): Observable<number> {
        let subject = new ReplaySubject<number>(1);
        this.replaySubject.subscribe(products => {
            let nextId = 0;
            let index = products.findIndex(p => this.locator(p, id));
            if (index > -1) {
                nextId = products[products.length > index + 1 
                    ? index + 1 : 0].id ?? 0;
            } else {
                nextId = id || 0;
            }
            subject.next(nextId);
            subject.complete();
        });
        return subject;
    }

    getPreviousProductid(id?: number): Observable<number> {
        let subject = new ReplaySubject<number>(1);
        this.replaySubject.subscribe(products => {
            let nextId = 0;
            let index = products.findIndex(p => this.locator(p, id));
            if (index > -1) {
                nextId = products[index > 0
                    ? index - 1 : products.length - 1].id ?? 0;
            } else {
                nextId = id || 0;
            }
            subject.next(nextId);
            subject.complete();
        });
        return subject;
    }

    saveProduct(product: Product) {
        if (product.id == 0 || product.id == null) {
            this.dataSource.saveProduct(product)
                .subscribe(p => this.products.push(p));
        } else {
            this.dataSource.updateProduct(product).subscribe(p => {
                let index = this.products
                    .findIndex(item => this.locator(item, p.id));
                this.products.splice(index, 1, p);
            });
        }
        this.replaySubject.next(this.products);
    }

    deleteProduct(id: number) {
        this.dataSource.deleteProduct(id).subscribe(() => {
            let index = this.products.findIndex(p => this.locator(p, id));
            if (index > -1) {
                this.products.splice(index, 1);
                this.replaySubject.next(this.products);                
            }
        });
    }
}

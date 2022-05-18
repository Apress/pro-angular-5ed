import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Model } from "./repository.model"
import { Product } from "./product.model";
import { MessageService } from "../messages/message.service";
import { Message } from "../messages/message.model";

@Injectable()
export class ModelResolver {

    constructor(private model: Model,
        private messages: MessageService) { }

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<Product | undefined> {
        this.messages.reportMessage(new Message("Loading data..."));
        return this.model.getProductObservable(1);
    }
}

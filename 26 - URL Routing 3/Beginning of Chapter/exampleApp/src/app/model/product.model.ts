export class Product {

    constructor(public id?: number,
        public name?: string,
        public category?: string,
        public price?: number, 
        public details?: Details) { }
}

export class Details {
    constructor(public supplier?: string, 
        public keywords?: string[] ) {}
}

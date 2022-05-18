export class Message {

    constructor(public text: string,
        public error: boolean = false, 
        public responses?: [string, (r: string) => void][]) { }
}

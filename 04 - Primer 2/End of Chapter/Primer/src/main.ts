import { Observable, Observer, Subject } from "rxjs";

function recieveEvents(observable: Observable<string>) {
    observable.subscribe({
        next: str => {
            console.log(`Event received: ${str}`);
        },
        complete: () => console.log("Sequence ended")
    });
}

function sendEvents(observer: Observer<string>) {
    let count = 5;
    for (let i = 0; i < count; i++) {
        observer.next(`${i + 1} of ${count}`);
    }
    observer.complete();
}

let subject = new Subject<string>();
recieveEvents(subject);
sendEvents(subject);

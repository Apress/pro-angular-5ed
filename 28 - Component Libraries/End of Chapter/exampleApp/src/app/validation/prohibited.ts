import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { Observable, Subject } from "rxjs";

export class ProhibitedValidator {

    static prohibitedTerms: string[] = ["ski", "swim"]

    static prohibited(): AsyncValidatorFn {
        return (control: AbstractControl): Promise<ValidationErrors | null> 
                | Observable<ValidationErrors | null> => {
            let subject = new Subject<ValidationErrors | null>();
            setTimeout(() => {
                let match = false;
                this.prohibitedTerms.forEach(word => {
                    if ((control.value as string).toLowerCase().indexOf(word) > -1) {
                        subject.next({"prohibited": { prohibited: word}})
                        match = true;
                    }
                });
                if (!match) {
                    subject.next(null);
                }
                subject.complete();
            }, 1000);
            return subject;
        }
    }
}

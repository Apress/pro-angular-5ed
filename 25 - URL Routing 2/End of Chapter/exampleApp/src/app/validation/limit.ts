import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class LimitValidator {

    static Limit(limit:number) : ValidatorFn {
        return (control: AbstractControl) : ValidationErrors | null => {
            let val = parseFloat(control.value);
            if (isNaN(val) || val > limit) {
                return {"limit": {"limit": limit, "actualValue": val}};
            } 
            return null;
        }
    }
}

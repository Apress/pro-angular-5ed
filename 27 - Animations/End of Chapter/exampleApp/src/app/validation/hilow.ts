import { Directive, Input, SimpleChanges } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, 
    Validator, ValidatorFn } from "@angular/forms";

export class HiLowValidator {

    static HiLow(high:number, low: number) : ValidatorFn {
        return (control: AbstractControl) : ValidationErrors | null => {
            let val = parseFloat(control.value);
            if (isNaN(val) || val > high || val < low) {
                return {"hilow": {"high": high, "low": low, "actualValue": val}};
            } 
            return null;
        }
    }
}

@Directive({
    selector: 'input[high][low]',
    providers: [{provide: NG_VALIDATORS, useExisting: HiLowValidatorDirective, 
        multi: true}]
})
export class HiLowValidatorDirective implements Validator {

    @Input()
    high: number | string | undefined

    @Input()
    low: number | string | undefined

    validator?: (control: AbstractControl) => ValidationErrors | null;

    ngOnChanges(changes: SimpleChanges): void {
        if ("high" in changes || "low" in changes) {
            let hival = typeof(this.high) == "string" 
                ? parseInt(this.high) : this.high;
            let loval = typeof(this.low) == "string" 
                ? parseInt(this.low) : this.low;
            this.validator = HiLowValidator.HiLow(hival ?? Number.MAX_VALUE, 
                loval ?? 0);
        }
    }

    validate(control: AbstractControl): ValidationErrors | null {
        return this.validator?.(control) ?? null;
    }
}

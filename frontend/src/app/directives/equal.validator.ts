import { Directive, forwardRef, Attribute, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[validateEqualTo][ngModel],[validateEqualTo][formControlName]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(()=>EqualTextValidator), multi: true }
    ]
})

export class EqualTextValidator implements Validator{

    @Input() validateEqualTo: string;

    validate( c: AbstractControl ){
        let inputValue = c.value;
        let otherValue = c.root.get(this.validateEqualTo);
        return this.checkEquality(inputValue, otherValue);
    }

    checkEquality(passwordVal: string, repeatEle: any){
        if( repeatEle && passwordVal !== repeatEle.value ) return{
            validateEqualTo: true
        }

        return null;
    }

}

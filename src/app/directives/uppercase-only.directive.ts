import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ 
    selector: '[uppercaseOnly]'
})
export class UppercaseOnly {
    constructor(
        private el: ElementRef
    ){}

    @HostListener('input', ['$event']) onInput(event: InputEvent){
        const input = event.target as HTMLInputElement;
        input.value = input.value.toUpperCase()
    }


}
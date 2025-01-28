import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[numeric-only]'
})
export class NumberOnlyDirective {
    constructor(
        private el: ElementRef,
        private renderer: Renderer2
    ) {}

    @HostListener('keypress', ['$event'])
    onKeypress(event: KeyboardEvent) {
        // Get the key that was pressed
        const key = event.key;
        
        // Regular expression to match only numbers
        const regex = /^[0-9]$/;
        
        // Prevent the key press if it's not a number
        if (!regex.test(key)) {
            event.preventDefault();
        }
    }

    @HostListener('paste', ['$event'])
    onPaste(event: ClipboardEvent) {
        // Get the pasted content
        const pastedInput = event.clipboardData?.getData('text/plain');
        
        if (pastedInput) {
            // Regular expression to check if the entire pasted string contains only numbers
            const regex = /^[0-9]+$/;
            
            if (!regex.test(pastedInput)) {
                event.preventDefault();
            }
        }
    }
}

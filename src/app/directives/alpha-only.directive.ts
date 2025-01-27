import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[alpha-only]'
})
export class AlphaOnlyDirective {
    constructor(
        private el: ElementRef,
        private renderer: Renderer2,
    ){}

    @HostListener('Keypress', ['$event']) onKeypress(event: KeyboardEvent ) {
        this.validateInput(event);
    }

    @HostListener('keydown', ['$event']) onKeydown(event: KeyboardEvent){
        this.validateInput(event);
    }

    @HostListener('paste', ['$event']) onPaste(event: ClipboardEvent){
        this.validateInput(event);
    }

    private validateInput(event: KeyboardEvent | ClipboardEvent) {
        const input = this.el.nativeElement.value;
        const regex = /^[a-zA-Z]+$/;
    
        if (event instanceof KeyboardEvent) {
          const charCode = event.key.charCodeAt(0);
          if (!(charCode >= 65 && charCode <= 90) && !(charCode >= 97 && charCode <= 122)) {
            event.preventDefault();
          }
        } else if (event instanceof ClipboardEvent) {
          const pastedText = this.getPastedText(event);
          const newValue = input + pastedText;
          if (!regex.test(newValue)) {
            event.preventDefault();
          }
        }
      }
    
      private getPastedText(event: ClipboardEvent): string {
        return event.clipboardData?.getData('text')?.trim() || '';
      }


}
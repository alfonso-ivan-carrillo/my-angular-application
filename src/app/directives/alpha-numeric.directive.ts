import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[alpha-numeric]',
})
export class AlphaNumeric {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('keypress', ['$event']) onKeypress(event: KeyboardEvent) {
    this.validateInput(event);
  }

  @HostListener('keydown', ['$event']) onKeydown(event: KeyboardEvent) {
    this.validateInput(event);
  }

  @HostListener('paste', ['$event']) onPaste(event: ClipboardEvent) {
    this.handlePaste(event);
  }

  private validateInput(event: KeyboardEvent | ClipboardEvent) {
    const input = this.el.nativeElement.value;
    const regex = /^[a-zA-Z0-9 ]{1,}$/;

    if (
      (event instanceof KeyboardEvent && event.keyCode !== 8 &&
        !regex.test(String.fromCharCode(event.keyCode))) ||
      (event instanceof ClipboardEvent &&
        !regex.test(input + this.getPastedText(event)))
    ) {
      event.preventDefault();
    }
  }

  private getPastedText(event: ClipboardEvent): string {
    return event.clipboardData.getData('text').trim();
  }

  private handlePaste(event: ClipboardEvent) {
    const pastedText = event.clipboardData.getData('text');
    const regex = /^[a-zA-Z0-9 ]{1,}$/;
    const newValue = this.el.nativeElement.value + pastedText;

    if (!regex.test(newValue)) {
      this.renderer.setProperty(
        this.el.nativeElement,
        'value',
        this.el.nativeElement.value
      );
      event.preventDefault();
    }
  }
}

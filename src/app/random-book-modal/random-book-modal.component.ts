import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-random-book-modal',
  templateUrl: './random-book-modal.component.html',
  styleUrls: ['./random-book-modal.component.css']
})
export class RandomBookModalComponent {
  isRandomBook: boolean = true;
  @Input() chosenRandomBook: any; 
  @Output() close = new EventEmitter<boolean>();

  onClose(): void {
    this.close.emit(false);
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-random-book-modal',
    templateUrl: './random-book-modal.component.html',
    styleUrls: ['./random-book-modal.component.css'],
    standalone: false
})
export class RandomBookModalComponent {
  isRandomBook: boolean = true;
  @Input() chosenRandomBook: any; 
  @Output() closeModalEvent = new EventEmitter<void>();

  closeModal(){
    this.closeModalEvent.emit();
  }
}

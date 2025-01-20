import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../models/Books.model';
import { BookAPIService } from '../services/bookAPI.service';
import { RandomBookModalComponent } from '../random-book-modal/random-book-modal.component';
import { ModalService } from '../services/modal.service';

@Component({
    selector: 'app-book-page',
    templateUrl: './book-page.component.html',
    styleUrls: ['./book-page.component.css'],
    standalone: false
})
export class BookPageComponent implements OnInit {
  books: Book[] = [];
  authorsArray: string[] = [];
  genreArray: string[] = [];
  yearArray: number[] = [];
  selectedTitle: string = '';
  selectedAuthor: string = '';
  selectedYear: string = '';
  selectedGenre: string = '';
  searchedAuthor: string = '';
  directiveSearch: string = '';
  selectedBook: Book;
  isBookSelected: boolean = false;
  isAuthorSelected: boolean = false;
  isYearSelected: boolean = false;
  isGenreSelected: boolean = false;
  isCoverPresent: boolean = false;
  isViewPhoto: boolean = false;
  isCoverBook: boolean = false;
  isRandomModalOpen: boolean = false;
  selectedRandomBook: Book;
  selectedGenreArray: Book[] = [];
  selectedYearArray: Book[] = [];
  selectedAuthorArray: Book[] = [];
  coverBook: Book;
  randoBook: Book;
  testArray: any[] = [{id: 1, name: 'test1'}, {id: 2, name: 'test2'}, {id: 3, name: 'test3'}, {id: 4, name: 'test4'}, {id: 5, name: 'test5'}];

  constructor(
    private router: Router, 
    private bookService: BookAPIService,
    private modalService: ModalService
    ) {
        this.modalService.getModalOpen$().subscribe(() => {
            this.getRandomBook();
        })
    }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
      this.removeAuthorDupes(this.books);
      this.removeGenreDupes(this.books);
      this.removeYearDupes(this.books);
    });
    
  }

  routeToPage(page: String) {
    this.router
      .navigate([page])
      .then(() => {
        console.log('Navigation to ' + page + ' successful');
      })
      .catch((error) => {
        console.error('Navigation to ' + page + ' failed:', error);
      });
  }

  displayTitle(title: string) {
    this.selectedTitle = title;
  }

  removeAuthorDupes(books: Book[]) {
    let tempArray = [];
    for (let book of this.books) {
      tempArray.push(book.author);
    }
    const uniqueArray = [...new Set(tempArray)];
    this.authorsArray = uniqueArray;
    this.authorsArray = this.sortArrayAsscending(this.authorsArray);
  }

  removeGenreDupes(books: Book[]) {
    this.genreArray = [...new Set(books.map((book) => book.genre))];
    this.genreArray = this.sortArrayAsscending(this.genreArray);
  }

  removeYearDupes(books: Book[]) {
    this.yearArray = [...new Set(books.map((book) => book.year))].sort(
      (a, b) => a - b
    );
  }

  sortArrayAsscending(array: any[]) {
    return array.sort((a, b) => a.localeCompare(b));
  }

  displayAuthorCover(id: number) {
   for(const book of this.books){
    if(book.id === id){
        this.coverBook = book;
        this.isCoverBook = true;
    }
   }
  }

  displayBookDetails(searchString: string) {
    let upperCaseSearchString = searchString.toUpperCase();
    this.isRandomModalOpen = false;
    let tempArray = [];
    for (let book of this.books) {
      if (book.title.toUpperCase() === upperCaseSearchString) {
        this.selectedBook = book;
        this.isCoverPresent = this.displayCover(book.cover);
        this.isBookSelected = true;
        this.isAuthorSelected = false;
        this.isYearSelected = false;
        this.isGenreSelected = false;
        this.selectedAuthor = "";
        this.selectedGenre = "";
        this.selectedYear = "";
      } else if (book.author.toUpperCase() === upperCaseSearchString) {
        tempArray.push(book);
        this.selectedAuthorArray = tempArray;
        this.isAuthorSelected = true;
        this.isYearSelected = false;
        this.isBookSelected = false;
        this.isGenreSelected = false;
        this.isCoverPresent = this.displayCover(book.cover);
        this.selectedTitle = "";
        this.selectedGenre = "";
        this.selectedYear = "";
      } else if (book.year.toString() === searchString) {
        tempArray.push(book);
        this.selectedYearArray = tempArray;
        this.isYearSelected = true;
        this.isBookSelected = false;
        this.isAuthorSelected = false;
        this.isGenreSelected = false;
        this.isCoverPresent = this.displayCover(book.cover);
        this.selectedTitle = "";
        this.selectedGenre = "";
        this.selectedAuthor = "";
      } else if (book.genre.toUpperCase() === upperCaseSearchString) {
        tempArray.push(book);
        this.selectedGenreArray = tempArray;
        this.isGenreSelected = true;
        this.isBookSelected = false;
        this.isAuthorSelected = false;
        this.isYearSelected = false;
        this.isCoverPresent = this.displayCover(book.cover);
        this.selectedTitle = "";
        this.selectedAuthor = "";
        this.selectedYear = "";
      }
    }
  }

  clearDropdowns(){
    this.selectedTitle = '';
    this.selectedAuthor = '';
    this.selectedYear = '';
    this.selectedGenre = '';
    this.searchedAuthor = '';
  }

  displayCover(cover: string): boolean {
    if (cover.length > 0) {
        return true;
  } else {
    return false;
  }
}

getRandomBook(): void{
    let randomIndex = Math.floor(Math.random() * this.books.length);
    this.selectedRandomBook = this.books[randomIndex];
    this.isRandomModalOpen = true;
    this.isViewPhoto = false;
    this.isBookSelected = false;
    this.isAuthorSelected = false;
    this.isYearSelected = false;
    this.isGenreSelected = false;

}

handleCloseModal(){
  this.isRandomModalOpen = false;
}

  changePdfName(event: Event): any {
    const target = event.target as HTMLInputElement;

    if (!target || !target.files) {
      console.error('Target element or files not found');
      return;
    }

    const tempPdfFiles: FileList = target.files;

    const newFiles: File[] = [];

    for (let i = 0; i < tempPdfFiles.length; i++) {
      const file = tempPdfFiles[i];

      for (const test of this.testArray){
      
      if (file.name === test.name) {
        const newFileName = `${file.name.split('.')[0]}_${Math.floor(Math.random() * 10000)}.pdf`;

        const blob = new Blob([file], { type: file.type });
        const newFile = new File([blob], newFileName, { type: file.type });

        newFiles.push(newFile);
      } else {
        newFiles.push(file);
      }
        }
    }

    const dt = new DataTransfer();
    newFiles.forEach((f) => dt.items.add(f));
    Object.defineProperty(target, 'files', {
      value: dt.files,
    });

    return event;
  }

  typingAuthor(searchedAuthor: any){
    let upperCaseSearchedAuthor = searchedAuthor.toUpperCase();
    const regExp = /^[a-zA-Z0-9 ]{1,}$/;
    if(!regExp.test(upperCaseSearchedAuthor)){
      this.searchedAuthor = '';
    } else {
      this.displayBookDetails(upperCaseSearchedAuthor);
    }
  }


}

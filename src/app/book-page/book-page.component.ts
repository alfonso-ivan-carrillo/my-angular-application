import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../models/Books.model';
import { BookAPIService } from '../services/bookAPI.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
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
  selectedBook: Book;
  isBookSelected: boolean = false;
  isAuthorSelected: boolean = false;
  isYearSelected: boolean = false;
  isGenreSelected: boolean = false;
  selectedGenreArray: Book[] = [];
  selectedAuthorArray: Book[] = [];
  testArray: any[] = [{id: 1, name: 'test1'}, {id: 2, name: 'test2'}, {id: 3, name: 'test3'}, {id: 4, name: 'test4'}, {id: 5, name: 'test5'}];

  constructor(private router: Router, private bookService: BookAPIService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
      console.log(this.books);
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
    // const uniqueAuthors = [...new Set(books.map(book => book.author))];
    // console.log(uniqueAuthors);
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
    console.log(this.genreArray);
  }

  removeYearDupes(books: Book[]) {
    this.yearArray = [...new Set(books.map((book) => book.year))].sort(
      (a, b) => a - b
    );
    console.log(this.yearArray);
  }

  sortArrayAsscending(array: any[]) {
    return array.sort((a, b) => a.localeCompare(b));
    console.log(array);
  }

  displayBookDetails(searchString: string) {
    let tempArray = [];
    for (let book of this.books) {
      if (book.title === searchString) {
        this.selectedBook = book;
        this.isBookSelected = true;
        this.isAuthorSelected = false;
        this.isGenreSelected = false;
        console.log(this.selectedBook.year);
      } else if (book.author === searchString) {
        tempArray.push(book);
        this.selectedAuthorArray = tempArray;
        this.isAuthorSelected = true;
        this.isBookSelected = false;
        this.isGenreSelected = false;
      } else if (book.year.toString() === searchString) {
        this.selectedBook = book;
        this.isYearSelected = true;
        this.isBookSelected = false;
        this.isAuthorSelected = false;
        this.isGenreSelected = false;
      } else if (book.genre === searchString) {
        tempArray.push(book);
        this.selectedGenreArray = tempArray;
        this.isGenreSelected = true;
        this.isBookSelected = false;
        this.isAuthorSelected = false;
        this.isYearSelected = false;
      }
    }
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
}

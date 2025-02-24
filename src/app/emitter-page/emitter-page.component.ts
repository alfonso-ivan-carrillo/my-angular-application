import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { OffCanvasComponent } from '../off-canvas/off-canvas.component';
import { CommonModule } from '@angular/common';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-emitter-page',
  standalone: false,
  templateUrl: './emitter-page.component.html',
  styleUrl: './emitter-page.component.css'
})
export class EmitterPageComponent implements OnInit {
  showPicture: boolean = false;


  constructor(
    private router: Router,
  ){}

  ngOnInit(): void {
    // setTimeout(() => {
    //   const offcanvasElement = document.getElementById('offCanvasExample');
    //   if (offcanvasElement) {
    //     new Offcanvas(offcanvasElement, {
    //       backdrop: true,
    //       KeyboardEvent: true,
    //       scroll: false
    //     });
    //   }
    // })
  }

  ngAfterViewInit(): void {
    const offcanvasElement = document.getElementById('offCanvasExample');
    if (offcanvasElement) {
      const bsOffcanvas = new bootstrap.Offcanvas(offcanvasElement);
    }
  }

  routeToPage(page: string){
    this.router.navigate([page]).then(() => {
      console.log('Navigation to ' + page + 'successful.');
    }).catch((error) => {
      console.error('Navigation to ' + page + 'failed: ', error);
    });
  }

}

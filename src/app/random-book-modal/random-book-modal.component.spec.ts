import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomBookModalComponent } from './random-book-modal.component';

describe('RandomBookModalComponent', () => {
  let component: RandomBookModalComponent;
  let fixture: ComponentFixture<RandomBookModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomBookModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomBookModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

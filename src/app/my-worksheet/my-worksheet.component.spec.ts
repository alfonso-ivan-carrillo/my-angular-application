import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWorksheetComponent } from './my-worksheet.component';

describe('FizzBuzzComponent', () => {
  let component: MyWorksheetComponent;
  let fixture: ComponentFixture<MyWorksheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyWorksheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyWorksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

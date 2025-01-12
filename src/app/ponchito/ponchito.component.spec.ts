import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PonchitoComponent } from './ponchito.component';

describe('PonchitoComponent', () => {
  let component: PonchitoComponent;
  let fixture: ComponentFixture<PonchitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PonchitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PonchitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

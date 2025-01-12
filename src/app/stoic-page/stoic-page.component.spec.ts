import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoicPageComponent } from './stoic-page.component';

describe('StoicPageComponent', () => {
  let component: StoicPageComponent;
  let fixture: ComponentFixture<StoicPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoicPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

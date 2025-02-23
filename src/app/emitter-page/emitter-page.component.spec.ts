import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitterPageComponent } from './emitter-page.component';

describe('EmitterPageComponent', () => {
  let component: EmitterPageComponent;
  let fixture: ComponentFixture<EmitterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmitterPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmitterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlfonsoComponent } from './alfonso.component';

describe('AlfonsoComponent', () => {
  let component: AlfonsoComponent;
  let fixture: ComponentFixture<AlfonsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlfonsoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlfonsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

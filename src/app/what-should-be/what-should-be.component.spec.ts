import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatShouldBeComponent } from './what-should-be.component';

describe('WhatShouldBeComponent', () => {
  let component: WhatShouldBeComponent;
  let fixture: ComponentFixture<WhatShouldBeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatShouldBeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatShouldBeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

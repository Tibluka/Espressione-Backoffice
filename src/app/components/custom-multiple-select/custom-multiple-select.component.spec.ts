import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMultipleSelectComponent } from './custom-multiple-select.component';

describe('CustomMultipleSelectComponent', () => {
  let component: CustomMultipleSelectComponent;
  let fixture: ComponentFixture<CustomMultipleSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomMultipleSelectComponent]
    });
    fixture = TestBed.createComponent(CustomMultipleSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

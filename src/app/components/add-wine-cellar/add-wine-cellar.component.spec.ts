import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWineCellarComponent } from './add-wine-cellar.component';

describe('AddWineCellarComponent', () => {
  let component: AddWineCellarComponent;
  let fixture: ComponentFixture<AddWineCellarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddWineCellarComponent]
    });
    fixture = TestBed.createComponent(AddWineCellarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineCellarsComponent } from './wine-cellars.component';

describe('WineCellarsComponent', () => {
  let component: WineCellarsComponent;
  let fixture: ComponentFixture<WineCellarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WineCellarsComponent]
    });
    fixture = TestBed.createComponent(WineCellarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

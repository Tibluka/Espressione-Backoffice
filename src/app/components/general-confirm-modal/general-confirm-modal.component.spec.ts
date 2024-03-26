import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralConfirmModalComponent } from './general-confirm-modal.component';

describe('GeneralConfirmModalComponent', () => {
  let component: GeneralConfirmModalComponent;
  let fixture: ComponentFixture<GeneralConfirmModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralConfirmModalComponent]
    });
    fixture = TestBed.createComponent(GeneralConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

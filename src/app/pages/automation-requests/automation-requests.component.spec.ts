import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationRequestsComponent } from './automation-requests.component';

describe('AutomationRequestsComponent', () => {
  let component: AutomationRequestsComponent;
  let fixture: ComponentFixture<AutomationRequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutomationRequestsComponent]
    });
    fixture = TestBed.createComponent(AutomationRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

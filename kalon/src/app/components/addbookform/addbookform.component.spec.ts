import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbookformComponent } from './addbookform.component';

describe('AddbookformComponent', () => {
  let component: AddbookformComponent;
  let fixture: ComponentFixture<AddbookformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddbookformComponent]
    });
    fixture = TestBed.createComponent(AddbookformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

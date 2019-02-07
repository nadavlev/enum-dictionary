import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnumDetailsComponent } from './enum-details.component';

describe('EnumDetailsComponent', () => {
  let component: EnumDetailsComponent;
  let fixture: ComponentFixture<EnumDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnumDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnumDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

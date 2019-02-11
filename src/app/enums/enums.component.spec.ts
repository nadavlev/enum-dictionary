import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnumsComponent } from './enums.component';
import { MatTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { RouterTestingModule } from '@angular/router/testing';

describe('EnumsComponent', () => {
  let component: EnumsComponent;
  let fixture: ComponentFixture<EnumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatTableModule,
        CdkTableModule],
      declarations: [ EnumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnumDetailsComponent } from './enum-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule, MatTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

describe('EnumDetailsComponent', () => {
  let component: EnumDetailsComponent;
  let fixture: ComponentFixture<EnumDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatTableModule,
        CdkTableModule,
        MatCardModule],
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

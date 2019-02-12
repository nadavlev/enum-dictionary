import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnumDetailsInsertDialogComponent } from './enum-details-insert-dialog.component';
import { MatCardModule, MatDialogModule } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';

describe('EnumDetailsInsertDialogComponent', () => {
  let component: EnumDetailsInsertDialogComponent;
  let fixture: ComponentFixture<EnumDetailsInsertDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule, MatDialogModule],
      declarations: [ EnumDetailsInsertDialogComponent],
      providers: [{provide: MAT_DIALOG_DATA, useValue: {}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnumDetailsInsertDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

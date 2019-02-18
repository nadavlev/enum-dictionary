import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnumsComponent } from './enums.component';
import { MatCardModule, MatDialogModule, MatTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { RouterTestingModule } from '@angular/router/testing';
import { EnumService } from '../enum.service';

describe('EnumsComponent', () => {
  let component: EnumsComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatTableModule,
        CdkTableModule,
        MatCardModule,
        MatDialogModule],
      declarations: [ EnumsComponent ],
      providers: [
        EnumsComponent,
        {provide: EnumService, useClass: EnumService}
        ]
    })
    .compileComponents();
  }));

  it('should create', () => {
    component = TestBed.get(EnumsComponent);
    expect(component).toBeTruthy();
  });
});

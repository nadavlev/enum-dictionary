import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnumDetailsComponent } from './enum-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule, MatDialogModule, MatTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { EnumService } from '../enum.service';

describe('EnumDetailsComponent', () => {
  let component: EnumDetailsComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatTableModule,
        CdkTableModule,
        MatCardModule,
        MatDialogModule],
      // declarations: [ EnumDetailsComponent ],
      providers: [ EnumDetailsComponent,
        {provide: EnumService, useClass: EnumService}]
    })
    .compileComponents();
  }));

  it('should create', () => {
    component = TestBed.get(EnumDetailsComponent);
    expect(component).toBeTruthy();
  });
  
});

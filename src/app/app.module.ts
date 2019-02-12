import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { EnumsComponent } from './enums/enums.component';
import { EnumDetailsComponent } from './enum-details/enum-details.component';
import { EnumDetailsInsertDialogComponent } from './enum-details-insert-dialog/enum-details-insert-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    EnumsComponent,
    EnumDetailsComponent,
    EnumDetailsInsertDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    CdkTableModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule
  ],
  entryComponents: [EnumDetailsComponent, EnumDetailsInsertDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

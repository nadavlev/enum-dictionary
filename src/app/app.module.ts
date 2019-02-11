import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { EnumsComponent } from './enums/enums.component';
import { EnumDetailsComponent } from './enum-details/enum-details.component';


@NgModule({
  declarations: [
    AppComponent,
    EnumsComponent,
    EnumDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    CdkTableModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

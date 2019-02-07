import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnumsComponent } from './enums/enums.component';
import { EnumDetailsComponent } from './enum-details/enum-details.component';

const routes: Routes = [
  { path: '', component: EnumsComponent},
  { path: 'enums', component: EnumsComponent },
  { path: 'enums/:enumName', component: EnumDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

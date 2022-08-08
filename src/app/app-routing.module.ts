import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';

const routes : Routes = [
  { path : '', redirectTo: 'words', pathMatch: 'full'},
  { path : 'words', component: BodyComponent},
  { path : 'register', component: BodyComponent},
  { path : 'login', component: BodyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

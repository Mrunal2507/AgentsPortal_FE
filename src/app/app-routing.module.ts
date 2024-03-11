import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterLink, Routes } from '@angular/router';
import { ButtonsComponent } from './Components/buttons/buttons.component';
import { LeadComponent } from './Components/lead/lead.component';

const routes: Routes = [
  { path: '', redirectTo: 'buttons', pathMatch: 'full' },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'addNewLead', component: LeadComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    RouterLink
  ]
})
export class AppRoutingModule { }

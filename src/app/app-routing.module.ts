import { EditContactComponent } from './pages/contact/edit-contact/edit-contact.component';
import { AddContactComponent } from './pages/contact/add-contact/add-contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: "home", component: HomeComponent
  },
  {
    path: "contact/add-contact", component: AddContactComponent
  },
  {
    path: "contact/edit-contact/:id", component: EditContactComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

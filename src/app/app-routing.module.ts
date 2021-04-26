import { ContactsListComponent } from './pages/contact/contacts-list/contacts-list.component';
import { EditContactComponent } from './pages/contact/edit-contact/edit-contact.component';
import { AddContactComponent } from './pages/contact/add-contact/add-contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "", component: ContactsListComponent
  },
  {
    path: "add-contact", component: AddContactComponent
  },
  {
    path: "edit-contact/:id", component: EditContactComponent
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

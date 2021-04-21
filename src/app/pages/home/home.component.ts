import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { config } from "../../config";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contacts: any[] = [];

  faTrash = faTrash
  faEdit = faEdit

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loadContacts()
  }

  deleteContact(contact: any) {
    console.log("delete contact", contact)
    this.http.delete(config.endpoints.contacts.delete + "/" + contact.id).subscribe((data: any) => {
      console.log("data", data)
      this.loadContacts()
    })
  }

  loadContacts() {
    this.http.get(config.endpoints.contacts.read).subscribe((data: any) => {
      console.log("data", data)
      this.contacts = data
    })
  }

  editContact(contact: any) {
    console.log("edit contact", contact)
    this.router.navigateByUrl("/contact/edit-contact/" + contact.id)
  }
}

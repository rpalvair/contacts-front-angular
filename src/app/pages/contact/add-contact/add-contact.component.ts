import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { config } from "../../../config";
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient,
    private router: Router) {
    this.contactForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        age: ['', Validators.required]
      }
    )
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("submit", this.contactForm.value)
    if (this.contactForm.valid) {
      const contact = this.contactForm.value;
      console.log("contact ", contact)
      this.httpClient.post(config.endpoints.contacts.create, {
        ...contact
      }).subscribe(data => {
        console.log("data", data)
        this.router.navigateByUrl("/")
      })
    }
  }
}

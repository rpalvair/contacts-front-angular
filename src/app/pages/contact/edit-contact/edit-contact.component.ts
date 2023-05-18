import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { config } from "../../../config";

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contactForm: UntypedFormGroup;
  contact: any;

  constructor(private activatedRoute: ActivatedRoute,
    private formBuilder: UntypedFormBuilder,
    private httpClient: HttpClient,
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
    this.loadContact()
  }

  onSubmit() {
    console.log("submit", this.contactForm.value)
    if (this.contactForm.valid) {
      const contact = this.contactForm.value;
      console.log("contact ", contact)
      this.httpClient.put(config.endpoints.contacts.edit, {
        ...contact,
        id: this.contact.id
      }).subscribe(data => {
        console.log("data", data)
        this.router.navigateByUrl("/")
      })
    }
  }

  loadContact() {
    let id = this.activatedRoute.snapshot.params.id
    console.log("contact id", id)
    this.httpClient.get(config.endpoints.contacts.read + "/" + id).subscribe((data: any) => {
      this.contact = data
      this.contactForm.patchValue({
        firstName: this.contact.firstName,
        lastName: this.contact.lastName,
        age: this.contact.age
      })
    })
  }
}

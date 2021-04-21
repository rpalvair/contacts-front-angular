import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { config } from "../../../config";

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private httpClient: HttpClient) {
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
  }

  loadContact() {
    let id = this.activatedRoute.snapshot.params.id
    console.log("contact id", id)
    this.httpClient.get(config.endpoints.contacts.read + "/" + id).subscribe((data: any) => {
      this.contactForm.patchValue({
        firstName: data.firstName,
        lastName: data.lastName,
        age: data.age
      })
    })
  }
}

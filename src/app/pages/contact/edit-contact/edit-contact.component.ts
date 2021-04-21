import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        age: ['', Validators.required]
      }
    )
  }

  ngOnInit(): void {
    console.log("contact id", this.activatedRoute.snapshot.params.id)
  }

  onSubmit() {
    console.log("submit",this.contactForm.value)
  }

}

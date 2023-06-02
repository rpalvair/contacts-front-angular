import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { AddContactComponent } from './add-contact.component';
import { By } from '@angular/platform-browser';

describe('AddContactComponent', () => {
  let component: AddContactComponent;
  let fixture: ComponentFixture<AddContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddContactComponent],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        HttpClientModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Add contact');
  });

  it("should have a label with class col-form-label for the firstname fiedl", () => {
    const el = fixture.debugElement.query(By.css('.col-form-label[for=\'firstName\']'));
    expect(el).toBeTruthy();
    expect(el.nativeElement.innerText).toEqual('Firstname');
  });
});

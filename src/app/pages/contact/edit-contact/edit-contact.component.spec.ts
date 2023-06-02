import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController  } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Data, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { EditContactComponent } from './edit-contact.component';
import { config } from "../../../config";
import { of } from 'rxjs';
import { convertToParamMap } from '@angular/router';

describe('EditContactComponent', () => {
  let component: EditContactComponent;
  let fixture: ComponentFixture<EditContactComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditContactComponent],
      imports: [
        RouterModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: {id: 1},
            }
          },
        },
      ]
    })
      .compileComponents();

      httpClient = TestBed.inject(HttpClient);
      httpTestingController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Edit contact');
  })

  it('should load contact during ngOnInit', () => {
    const testData: Data = {firstName: 'Palvair',lastName: 'Ruddy',age: 37};

    const req = httpTestingController.expectOne("http://localhost:8080/contacts/1");

    expect(req.request.method).toEqual('GET');

    req.flush(testData);

    httpTestingController.verify();

    expect(component.contact).toEqual(testData);

  })
});

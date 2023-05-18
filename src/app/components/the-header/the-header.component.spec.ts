import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheHeaderComponent } from './the-header.component';

describe('TheHeaderComponent', () => {
  let component: TheHeaderComponent;
  let fixture: ComponentFixture<TheHeaderComponent>;
  let version = "13.4.0";

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TheHeaderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render app infos', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.navbar-brand').textContent).toContain('My Contacts');
    expect(compiled.querySelector('.techno').textContent).toContain('with Angular ' + version);
  })
});

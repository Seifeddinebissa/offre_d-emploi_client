import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormateurComponent } from './register-formateur.component';

describe('RegisterFormateurComponent', () => {
  let component: RegisterFormateurComponent;
  let fixture: ComponentFixture<RegisterFormateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFormateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

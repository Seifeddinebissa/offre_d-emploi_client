import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierentrepriseComponent } from './modifierentreprise.component';

describe('ModifierentrepriseComponent', () => {
  let component: ModifierentrepriseComponent;
  let fixture: ComponentFixture<ModifierentrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierentrepriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierentrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

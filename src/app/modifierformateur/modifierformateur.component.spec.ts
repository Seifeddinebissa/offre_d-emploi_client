import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierformateurComponent } from './modifierformateur.component';

describe('ModifierformateurComponent', () => {
  let component: ModifierformateurComponent;
  let fixture: ComponentFixture<ModifierformateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierformateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

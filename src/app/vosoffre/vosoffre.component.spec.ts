import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VosoffreComponent } from './vosoffre.component';

describe('VosoffreComponent', () => {
  let component: VosoffreComponent;
  let fixture: ComponentFixture<VosoffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VosoffreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VosoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

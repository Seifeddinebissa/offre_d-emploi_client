import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogiEntrepriseComponent } from './logi-entreprise.component';

describe('LogiEntrepriseComponent', () => {
  let component: LogiEntrepriseComponent;
  let fixture: ComponentFixture<LogiEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogiEntrepriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogiEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

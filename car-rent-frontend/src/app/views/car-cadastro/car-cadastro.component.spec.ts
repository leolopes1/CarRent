import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCadastroComponent } from './car-cadastro.component';

describe('CarCadastroComponent', () => {
  let component: CarCadastroComponent;
  let fixture: ComponentFixture<CarCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

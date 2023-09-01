import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CarService } from 'src/app/shared/service/car.service';

interface Marca {
  name: string,
  code: string,
}
@Component({
  selector: 'app-car-cadastro',
  templateUrl: './car-cadastro.component.html',
  styleUrls: ['./car-cadastro.component.scss']
})



export class CarCadastroComponent implements OnInit {

  marcas: Marca[];

  selectedMarcaCode: string = '';
  carForm: any;

  constructor(
    protected fb: FormBuilder,
    protected service : CarService
  ) {
    this.marcas = [

      { name: 'Selecione', code: '' },
      { name: 'Honda', code: '1' },
      { name: 'Toyota', code: '2' },
      { name: 'Volkswagen', code: '3' },
      { name: 'Chevrolet', code: '4' },
      { name: 'Ford', code: '5' }
    ];


  }

  ngOnInit(): void {
    this.carForm = this.fb.group({
      modelo: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      placa: ['', [Validators.required]],
      ano: [null, [Validators.required]],
    })
  }
  
  validateForm() {
    this.validateAllFormFields(this.carForm);
  }
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls)
      .forEach(field => {
        const control = formGroup.get(field);
        if (control instanceof FormControl) {
          control.markAsTouched({onlySelf: true});
        } else if (control instanceof FormGroup) {
          this.validateAllFormFields(control);
        }
      });
  }

  salvar() {
    this.validateForm();
    if (this.carForm.valid) {
      this.service.postCars(this.carForm.value).subscribe(
        res => {
          console.log('SUCESSUM');
          
        },err => {
          console.log(err);
        }
      );
    }
  }
}

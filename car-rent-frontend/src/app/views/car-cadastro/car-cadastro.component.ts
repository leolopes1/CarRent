import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

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
  // public carForm:FormGroup;


 
  marcas: Marca[];
  
  selectedMarcaCode: string = '';

  constructor() {
    this.marcas = [
      {name: 'Honda',code:'1'},
      {name: 'Toyota',code:'2'},
      {name: 'Volkswagen',code:'3'},
      {name: 'Chevrolet',code:'4'},
      {name: 'Ford',code:'5'}
  ];
    

   }

  ngOnInit(): void {
    // this.carForm = this.fb.group({
    //   carModelo:['', [Validators.required]],
    //   carMarca:['', [Validators.required]],
    //   carAno:['', [Validators.required]],
    //   carPreco:['', [Validators.required]]

    // })
  }

}

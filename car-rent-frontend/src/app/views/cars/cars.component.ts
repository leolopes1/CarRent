import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/shared/model/car.model';
import { CarService } from 'src/app/shared/service/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  carList: any;

  constructor(
    public carService: CarService
  ) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
    this.carService.getCars().subscribe(data =>{
      this.carList  = data  ;
      console.log(this.carList)
    })
      
    
  }

}

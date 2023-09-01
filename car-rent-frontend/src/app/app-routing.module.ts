import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './views/cars/cars.component';
import { ReservationsComponent } from './views/reservations/reservations.component';
import {CarCadastroComponent} from './views/car-cadastro/car-cadastro.component'


const routes: Routes = [
  {
    path:'',
    component: ReservationsComponent
  },
  {
    path:'cars',
    component: CarsComponent
  },
  {
    path:'car',
    component: CarCadastroComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

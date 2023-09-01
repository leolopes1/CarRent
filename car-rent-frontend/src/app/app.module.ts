import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CarsComponent } from './views/cars/cars.component';
import { ReservationsComponent } from './views/reservations/reservations.component';
import { HeaderComponent } from './components/header/header.component';
import { CarCadastroComponent } from './views/car-cadastro/car-cadastro.component';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { ReservaFormComponent } from './components/reserva-form/reserva-form.component';
import {AccordionModule} from 'primeng/accordion';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuModule} from 'primeng/menu';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';



@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    ReservationsComponent,
    HeaderComponent,
    ReservaFormComponent,
    CarCadastroComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToolbarModule,
    AccordionModule,
    ButtonModule,
    TabMenuModule,
    MenuModule,
    InputTextModule,
    DropdownModule,
    FormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

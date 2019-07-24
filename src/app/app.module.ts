import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PacmanLaneComponent } from './home/pacman-lane/pacman-lane.component';
import { CalculatorComponent } from './home/calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PacmanLaneComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

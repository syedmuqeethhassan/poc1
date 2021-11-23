import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ToastModule} from 'primeng/toast';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { BillingComponent } from './billing/billing.component';
import { LoginpageComponent } from './detailspage1/loginpage.component';
import { ReactiveFormsModule } from '@angular/forms';
import {AccordionModule} from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import {MenuItem, MessageService} from 'primeng/api';
import {InputNumberModule} from 'primeng/inputnumber';
import { Loginpage2Component } from './detailspage2/loginpage2.component';
import {CalendarModule} from 'primeng/calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    BillingComponent,
    LoginpageComponent,
    Loginpage2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    InputNumberModule,
    CalendarModule,
    BrowserAnimationsModule,
    DropdownModule,
    ToastModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

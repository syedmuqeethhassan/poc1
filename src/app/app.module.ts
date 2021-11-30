import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ToastModule} from 'primeng/toast';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { BillingComponent } from './billing/billing.component';
import { DetailspageComponent } from './detailspage/detailspage.component';
import { ReactiveFormsModule } from '@angular/forms';
import {AccordionModule} from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import {MenuItem, MessageService} from 'primeng/api';
import {InputNumberModule} from 'primeng/inputnumber';
import { Detailspage2Component } from './detailspage2/detailspage2.component';
import {CalendarModule} from 'primeng/calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';
import {SplitterModule} from 'primeng/splitter';
import {PrimeIcons} from 'primeng/api';
import { PlanComponent } from './plan/plan.component';
import { Plan1Component } from './plan1/plan1.component';
import { PlancardComponent } from './plancard/plancard.component';
import {TabMenuModule} from 'primeng/tabmenu';
import {DialogModule, Dialog} from 'primeng/dialog'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    BillingComponent,
    DetailspageComponent,
    Detailspage2Component,
    PlanComponent,
    Plan1Component,
    PlancardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    InputNumberModule,
    CalendarModule,
    BrowserAnimationsModule,
    DropdownModule,
    ToastModule,
    SplitterModule,
    TabMenuModule,
    DialogModule,
    ButtonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

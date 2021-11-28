import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailspageComponent } from './detailspage/detailspage.component';
import { Detailspage2Component } from './detailspage2/detailspage2.component';
import { ProductsComponent } from './products/products.component';
import { PlanComponent } from './plan/plan.component';
import { Plan1Component } from './plan1/plan1.component';
import { PlancardComponent } from './plancard/plancard.component';

const routes: Routes = [
  { path: 'home' , component: HomeComponent },
  { path: '' , component: DetailspageComponent},
  { path: 'products' , component: ProductsComponent},
  { path: 'detailspage2' , component:Detailspage2Component},
  { path: 'plans' , component: PlanComponent},
  { path: 'plans1' , component:Plan1Component},
  { path: 'plancard' , component:PlancardComponent}
];
// test
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

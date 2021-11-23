import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginpageComponent } from './detailspage1/loginpage.component';
import { Loginpage2Component } from './detailspage2/loginpage2.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: 'home' , component: HomeComponent },
  { path: '' , component: LoginpageComponent},
  { path: 'products' , component: ProductsComponent},
  { path: 'loginpage2' , component:Loginpage2Component}
];
// test
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

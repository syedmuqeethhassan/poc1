import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: 'home' , component: HomeComponent },
  { path: '' , component: LoginpageComponent},
  { path: 'products' , component: ProductsComponent}
];
// test
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

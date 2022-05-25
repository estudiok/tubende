import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartshopingComponent } from './cartshoping/cartshoping.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PayComponent } from './pay/pay.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: HomeComponent},
      {path: 'detail/:id', component: DetailComponent},
      {path: 'access', component: LoginComponent},
      {path: 'cartshoping', component: CartshopingComponent},
      {path: 'pay', component: PayComponent},
      
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopcartRoutingModule { }

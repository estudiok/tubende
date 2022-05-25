import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopcartRoutingModule } from './shopcart-routing.module';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { CartshopingComponent } from './cartshoping/cartshoping.component';
import { PayComponent } from './pay/pay.component';
import { LocationComponent } from './location/location.component';
import { MethodpayComponent } from './methodpay/methodpay.component';
import { NavbarComponent } from './mixins/navbar/navbar.component';


import { CardModule } from 'primeng/card';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {BadgeModule} from 'primeng/badge';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from './mixins/product-card/product-card.component';
import {ImageModule} from 'primeng/image';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CheckboxModule} from 'primeng/checkbox';





@NgModule({
  declarations: [
    HomeComponent,
    DetailComponent,
    LoginComponent,
    CartshopingComponent,
    PayComponent,
    LocationComponent,
    MethodpayComponent,
    NavbarComponent,
    ProductCardComponent,
  ],
  imports: [
    CommonModule,
    ShopcartRoutingModule,
    CardModule,
    AvatarModule,
    AvatarGroupModule,
    MenubarModule,
    ButtonModule,
    BadgeModule,
    InputTextModule,
    DropdownModule,
    FormsModule,
    ImageModule,
    RadioButtonModule,
    CheckboxModule,
  ]
})
export class ShopcartModule { }

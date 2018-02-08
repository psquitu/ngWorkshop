import { RouterModule,Routes } from '@angular/router';
 
import {NgModule} from '@angular/core';
import { UserComponent } from './users/users.component';
import { ProductComponent } from './product/product.component';

const appRoutes:Routes =[
    { path: '',redirectTo:'users', pathMatch:'full' },
    { path:'users', component:UserComponent },
    { path:'product', component:ProductComponent },
  ];
  
  @NgModule({
      imports:[ RouterModule.forRoot(appRoutes)],
      exports:[ RouterModule ]
  })

  export class AppRouting{}
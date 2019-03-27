import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductComponent } from './product/product/product.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { IdIsValidIdGuard } from './shared/guard/id-is-valid-id.guard';
import { LoginComponent } from './auth/login/login.component';
import { UserLoggedGuard } from './shared/guard/user-logged.guard';
import { UserUnloggedGuard } from './shared/guard/user-unlogged.guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: WelcomeComponent, canActivate: [UserLoggedGuard]},
  {path: 'login', component: LoginComponent, canActivate: [UserUnloggedGuard]},
  {
    path: 'products',
    component: ProductComponent , canActivate: [UserLoggedGuard], children: [
      {path: '', component: ProductListComponent},
      {path: 'id/edit', component: ProductEditComponent, canActivate: [IdIsValidIdGuard]},
      {path: ':id', component: ProductDetailComponent, canActivate: [IdIsValidIdGuard]}
    ]
  },
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

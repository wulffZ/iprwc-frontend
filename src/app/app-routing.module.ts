import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AuthGuard} from "./helpers/auth.guard";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ManagementComponent} from "./management/management/management.component";
import {ShowComponent} from "./show/show.component";
import {ChooseCategory} from "./management/car/choose-category/choose-category";
import {CreateCategoryComponent} from "./management/category/create-category/create-category.component";
import {CreateCarComponent} from "./management/car/create-car/create-car.component";
import {EditCarComponent} from "./management/car/edit-car/edit-car.component";
import {ChooseCar} from "./management/car/choose-car/choose-car";
import {EditCategoryComponent} from "./management/category/edit-category/edit-category.component";


const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'car/:id', component: ShowComponent},
    {path: 'admin', component: ManagementComponent, canActivate: [AuthGuard]},
    {path: 'choose-category', component: ChooseCategory, canActivate: [AuthGuard]},
    {path: 'choose-car', component: ChooseCar, canActivate: [AuthGuard]},
    {path: 'create-category', component: CreateCategoryComponent, canActivate: [AuthGuard]},
    {path: 'create-car/:category_id', component: CreateCarComponent, canActivate: [AuthGuard]},
    {path: 'edit-car/:car_id', component: EditCarComponent, canActivate: [AuthGuard]},
    {path: 'edit-category/:category_id', component: EditCategoryComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AuthGuard} from "./helpers/auth.guard";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ManagementComponent} from "./management/management/management.component";
import {ArchiveComponent} from "./management/archive/archive.component";
import {ReservationComponent} from "./reservation/reservation/reservation.component";
import {MyReservationComponent} from "./reservation/my-reservation/my-reservation.component";
import {EditReservationComponent} from "./reservation/edit-reservation/edit-reservation.component";
import {MakeReservationComponent} from "./reservation/make-reservation/make-reservation.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {ShowComponent} from "./show/show.component";
import {ChooseCategory} from "./management/car/choose-category/choose-category";
import {CreateCategoryComponent} from "./management/category/create-category/create-category.component";
import {CreateCarComponent} from "./management/car/create-car/create-car.component";


const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'car/:id', component: ShowComponent},
    {path: 'admin', component: ManagementComponent, canActivate: [AuthGuard]},
    {path: 'archive', component: ArchiveComponent, canActivate: [AuthGuard]},
    {path: 'reservation', component: ReservationComponent, canActivate: [AuthGuard]},
    {path: 'make-reservation', component: MakeReservationComponent, canActivate: [AuthGuard]},
    {path: 'my-reservation', component: MyReservationComponent, canActivate: [AuthGuard]},
    {path: 'edit-reservation', component: EditReservationComponent, canActivate: [AuthGuard]},
    {path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard]},
    {path: 'choose-category', component: ChooseCategory, canActivate: [AuthGuard]},
    {path: 'create-category', component: CreateCategoryComponent, canActivate: [AuthGuard]},
    {path: 'create-car/:category_id', component: CreateCarComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}

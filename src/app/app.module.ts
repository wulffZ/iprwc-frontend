import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MakeReservationComponent } from './reservation/make-reservation/make-reservation.component';
import { MyReservationComponent } from './reservation/my-reservation/my-reservation.component';
import { EditReservationComponent } from './reservation/edit-reservation/edit-reservation.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ArchiveComponent } from './management/archive/archive.component';
import { ManagementComponent } from './management/management/management.component';
import { LogoComponent } from './logo/logo.component';

import { authInterceptorProviders } from "./helpers/auth.interceptor";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentComponent } from './content/content.component';
import {ReservationComponent} from "./reservation/reservation/reservation.component";
import { ChooseCategory } from './management/car/choose-category/choose-category';
import { ShowComponent } from './show/show.component';
import { CreateCategoryComponent } from './management/category/create-category/create-category.component';
import {CreateCarComponent} from "./management/car/create-car/create-car.component";

@NgModule({
  declarations: [
    AppComponent,
    MakeReservationComponent,
    MyReservationComponent,
    EditReservationComponent,
    CalendarComponent,
    LoginComponent,
    RegisterComponent,
    ArchiveComponent,
    ManagementComponent,
    LogoComponent,
    HeaderComponent,
    DashboardComponent,
    ContentComponent,
    ReservationComponent,
    ChooseCategory,
    ShowComponent,
    CreateCategoryComponent,
    CreateCarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

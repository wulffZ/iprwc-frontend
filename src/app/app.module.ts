import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { MakeReservationComponent } from './reservation/make-reservation/make-reservation.component';
import { MyReservationComponent } from './reservation/my-reservation/my-reservation.component';
import { EditReservationComponent } from './reservation/edit-reservation/edit-reservation.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ArchiveComponent } from './management/archive/archive.component';
import { ManagementComponent } from './management/management/management.component';
import { StartComponent } from './start/start.component';
import { LogoComponent } from './logo/logo.component';

import { authInterceptorProviders } from "./helpers/auth.interceptor";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentComponent } from './content/content.component';
import {ReservationComponent} from "./reservation/reservation/reservation.component";
import { ChangeAttributesComponent } from './management/change-attributes/change-attributes.component';
import { ChooseRoomComponent } from './management/change-attributes/choose-room/choose-room.component';
import { ChooseLocationComponent } from './management/change-attributes/choose-location/choose-location.component';

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
    StartComponent,
    LogoComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ContentComponent,
    ReservationComponent,
    ChangeAttributesComponent,
    ChooseRoomComponent,
    ChooseLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

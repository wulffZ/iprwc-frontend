import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ManagementComponent } from './management/management/management.component';
import { LogoComponent } from './logo/logo.component';

import { authInterceptorProviders } from "./helpers/auth.interceptor";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentComponent } from './content/content.component';
import { ChooseCategory } from './management/car/choose-category/choose-category';
import { ShowComponent } from './show/show.component';
import { CreateCategoryComponent } from './management/category/create-category/create-category.component';
import {CreateCarComponent} from "./management/car/create-car/create-car.component";
import {EditCarComponent} from "./management/car/edit-car/edit-car.component";
import {ChooseCar} from "./management/car/choose-car/choose-car";
import {EditCategoryComponent} from "./management/category/edit-category/edit-category.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ManagementComponent,
    LogoComponent,
    HeaderComponent,
    DashboardComponent,
    ContentComponent,
    ChooseCategory,
    ShowComponent,
    CreateCategoryComponent,
    CreateCarComponent,
    EditCarComponent,
    ChooseCar,
    EditCategoryComponent
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

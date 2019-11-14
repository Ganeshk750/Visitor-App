import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shared/header.component';
import { FooterComponent } from './shared/footer.component';
import { LoginComponent } from './shared/login.component';
import { SignupComponent } from './shared/signup.component';
import { AboutusComponent } from './shared/aboutus.component';
import { RegisterResultComponent } from './register/register-result.component';
import { HostAddComponent } from './host/host-add.component';
import { HostEditComponent } from './host/host-edit.component';
import { HostResultComponent } from './host/host-result.component';
import { HostSearchComponent } from './host/host-search.component';
import { GuestAddComponent } from './guest/guest-add.component';
import { GuestEditComponent } from './guest/guest-edit.component';
import { GuestResultComponent } from './guest/guest-result.component';
import { GuestSearchComponent } from './guest/guest-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    AboutusComponent,
    RegisterResultComponent,
    HostAddComponent,
    HostEditComponent,
    HostResultComponent,
    HostSearchComponent,
    GuestAddComponent,
    GuestEditComponent,
    GuestResultComponent,
    GuestSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheHeaderComponent } from './components/the-header/the-header.component';
import { TheFooterComponent } from './components/the-footer/the-footer.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddContactComponent } from './pages/contact/add-contact/add-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    TheHeaderComponent,
    TheFooterComponent,
    HomeComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

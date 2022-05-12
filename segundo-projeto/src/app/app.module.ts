import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { NavComponent } from './primeiro-componente/nav/nav.component';
import { ContentComponent } from './primeiro-componente/content/content.component';
import { FooterComponent } from './primeiro-componente/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    NavComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

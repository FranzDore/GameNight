import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TruthOrDareComponent } from './pages/truth-or-dare/truth-or-dare.component';
import { PressTheButtonComponent } from './pages/press-the-button/press-the-button.component';
import { PensieriNotturniComponent } from './pages/pensieri-notturni/pensieri-notturni.component';
import { FooterComponent } from './shared/footer/footer.component';
import { WouldYouRatherComponent } from './pages/would-you-rather/would-you-rather.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TruthOrDareComponent,
    PressTheButtonComponent,
    PensieriNotturniComponent,
    FooterComponent,
    WouldYouRatherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TruthOrDareComponent } from './pages/truth-or-dare/truth-or-dare.component';
import { PressTheButtonComponent } from './pages/press-the-button/press-the-button.component';
import { PensieriNotturniComponent } from './pages/pensieri-notturni/pensieri-notturni.component';
import { WouldYouRatherComponent } from './pages/would-you-rather/would-you-rather.component';

const routes: Routes = [
  { path: 'home', component: DashboardComponent },
  { path: 'truthordare', component: TruthOrDareComponent },
  { path: 'pressthebutton', component: PressTheButtonComponent },
  { path: 'pensierinotturni', component: PensieriNotturniComponent },
  { path: 'wouldyourather', component: WouldYouRatherComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

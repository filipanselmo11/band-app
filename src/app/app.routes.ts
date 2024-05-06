import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SlipknotComponent } from './pages/slipknot/slipknot.component';
import { LinkinParkComponent } from './pages/linkin-park/linkin-park.component';
import { SoadComponent } from './pages/soad/soad.component';
import { KornComponent } from './pages/korn/korn.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomeComponent
  },
  {
    path: 'slipknot',
    title: 'Slipknot',
    component: SlipknotComponent
  },
  {
    path: 'linkin-park',
    title: 'Linkin Park',
    component: LinkinParkComponent
  },
  {
    path: 'soad',
    title: 'SOAD',
    component: SoadComponent
  },
  {
    path: 'korn',
    title: 'KoRn',
    component: KornComponent
  },

];

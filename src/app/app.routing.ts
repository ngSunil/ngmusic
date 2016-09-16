import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent }      from './components/about/about.component';
import { HomeComponent }      from './components/home/home.component';
import { ArtistComponent }      from './components/artist/artist.component';
import { AlbumComponent }      from './components/album/album.component';

const appRoutes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
      path: '',
      component: HomeComponent
  },
  {
      path: 'home',
      component: HomeComponent
  },
  {
      path: 'artist/:id',
      component: ArtistComponent
  },
  {
      path: 'album/:id',
      component: AlbumComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);